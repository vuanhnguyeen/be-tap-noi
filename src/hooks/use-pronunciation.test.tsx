import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { usePronunciation } from "@/hooks/use-pronunciation";

class MockUtterance {
  lang = "";
  rate = 1;
  pitch = 1;
  onstart: (() => void) | null = null;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;

  constructor(public text: string) {}
}

describe("usePronunciation", () => {
  beforeEach(() => {
    vi.restoreAllMocks();

    Object.defineProperty(window, "speechSynthesis", {
      writable: true,
      value: {
        cancel: vi.fn(),
        speak: vi.fn((utterance: MockUtterance) => {
          utterance.onstart?.();
          utterance.onend?.();
        }),
      },
    });

    Object.defineProperty(window, "SpeechSynthesisUtterance", {
      writable: true,
      value: MockUtterance,
    });
  });

  it("fallback sang speech synthesis khi không có mp3", async () => {
    const { result } = renderHook(() => usePronunciation());

    await act(async () => {
      await result.current.play({
        id: "cat",
        name: "Con mèo",
        speechText: "Con mèo",
        image: "/images/noto/animals/cat.svg",
      });
    });

    expect(window.speechSynthesis.speak).toHaveBeenCalledTimes(1);
    expect(result.current.isSupported).toBe(true);
  });
});

class MockAudio {
  static instances: MockAudio[] = [];
  currentTime = 0;
  onplay: (() => void) | null = null;
  onended: (() => void) | null = null;
  onpause: (() => void) | null = null;
  onerror: (() => void) | null = null;
  play = vi.fn(() => {
    this.onplay?.();
    return Promise.resolve();
  });
  pause = vi.fn();
  constructor(public src: string) {
    MockAudio.instances.push(this);
  }
}

const cat = {
  id: "animal-cat", name: "Con mèo", speechText: "Con mèo",
  image: "/images/noto/animals/cat.svg", audio: "/audio/animals/animal-cat.mp3",
};

describe("MP3 playback", () => {
  beforeEach(() => {
    MockAudio.instances = [];
    Object.defineProperty(window, "Audio", { writable: true, value: MockAudio });
    Object.defineProperty(window, "speechSynthesis", {
      writable: true, value: { cancel: vi.fn(), speak: vi.fn() },
    });
    Object.defineProperty(window, "SpeechSynthesisUtterance", { writable: true, value: MockUtterance });
  });

  it("plays the configured MP3 and updates playing state", async () => {
    const { result } = renderHook(() => usePronunciation());
    await act(() => result.current.play(cat));
    expect(MockAudio.instances[0].src).toBe(cat.audio);
    expect(result.current.isPlaying).toBe(true);
    expect(window.speechSynthesis.speak).not.toHaveBeenCalled();
    act(() => MockAudio.instances[0].onended?.());
    expect(result.current.isPlaying).toBe(false);
  });

  it("ignores a delayed audio error after switching words", async () => {
    const { result } = renderHook(() => usePronunciation());
    await act(() => result.current.play(cat));
    const first = MockAudio.instances[0];
    // Model a delayed error from the previous clip after the next clip starts.
    const oldError = first.onerror;
    await act(() => result.current.play({ ...cat, audio: "/audio/animals/animal-dog.mp3" }));
    act(() => oldError?.());
    expect(first.pause).toHaveBeenCalled();
    expect(window.speechSynthesis.speak).not.toHaveBeenCalled();
    expect(result.current.isPlaying).toBe(true);
  });

  it("falls back only once when error and rejection both fire", async () => {
    const { result } = renderHook(() => usePronunciation());
    Object.defineProperty(window, "Audio", { writable: true, value: class extends MockAudio {
      play = vi.fn(() => {
        this.onerror?.();
        return Promise.reject(new Error("Missing MP3"));
      });
    } });
    await act(() => result.current.play(cat));
    expect(window.speechSynthesis.speak).toHaveBeenCalledTimes(1);
  });

  it("stops playback and detaches callbacks on unmount", async () => {
    const { result, unmount } = renderHook(() => usePronunciation());
    await act(() => result.current.play(cat));
    const audio = MockAudio.instances[0];
    unmount();
    expect(audio.pause).toHaveBeenCalled();
    expect(audio.onerror).toBeNull();
  });
});
