"""Generate checked-in Hoai My MP3s from vocabulary (requires edge-tts)."""
import argparse
import asyncio
import re
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parents[1]
VOICE = "vi-VN-HoaiMyNeural"


def vocabulary(topic=None):
    items = []
    sources = sorted((ROOT / "src/data/topics").glob("*.ts"))
    if topic:
        sources = [source for source in sources if source.stem == topic]
        if not sources:
            raise ValueError(f"Unknown topic: {topic}")
    for source in sources:
        text = source.read_text()
        count = 0
        for block in re.findall(r"\{[^{}]*\}", text):
            fields = dict(re.findall(r'(id|speechText|audio):\s*"([^"\n]+)"', block))
            if "speechText" not in fields:
                continue
            if not fields.get("audio", "").startswith("/audio/"):
                raise ValueError(f"Missing audio path: {source}: {fields}")
            items.append(fields)
            count += 1
        if count != len(re.findall(r"\bspeechText\s*:", text)):
            raise ValueError(f"Cannot parse all vocabulary in {source}")
    paths = [item["audio"] for item in items]
    if not items or len(paths) != len(set(paths)):
        raise ValueError("Empty vocabulary or duplicate audio paths")
    return items


async def main(force, topic=None):
    items = vocabulary(topic)
    failures = []
    for item in items:
        target = ROOT / "public" / item["audio"].lstrip("/")
        if target.exists() and target.stat().st_size and not force:
            continue
        target.parent.mkdir(parents=True, exist_ok=True)
        temporary = target.with_suffix(".tmp.mp3")
        # Sequential requests avoid bursts that can return empty TTS responses.
        for attempt in range(6):
            try:
                await asyncio.wait_for(
                    edge_tts.Communicate(item["speechText"], VOICE).save(str(temporary)),
                    timeout=45,
                )
                if not temporary.stat().st_size:
                    raise ValueError("Empty audio response")
                temporary.replace(target)
                print(f"Generated {item['audio']}", flush=True)
                break
            except Exception as error:
                temporary.unlink(missing_ok=True)
                print(f"Retry {attempt + 1}/6: {item['id']}: {error}", flush=True)
                if attempt == 5:
                    failures.append(item["id"])
                else:
                    await asyncio.sleep(min(2 ** (attempt + 1), 16))
            finally:
                temporary.unlink(missing_ok=True)
        await asyncio.sleep(0.5)
    if failures:
        raise RuntimeError(f"Failed items: {', '.join(failures)}. Rerun to resume missing files.")
    print(f"Ready: {len(items)} MP3s, voice {VOICE}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--force", action="store_true", help="Regenerate existing files after text changes")
    parser.add_argument("--topic", help="Generate one topic, e.g. clothing")
    args = parser.parse_args()
    asyncio.run(main(args.force, args.topic))
