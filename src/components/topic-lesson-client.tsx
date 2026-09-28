"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useCallback } from "react";
import type { Topic } from "@/types/learning";
import { AppHeader } from "@/components/app-header";
import { BackHomeButton } from "@/components/back-home-button";
import { EmptyState } from "@/components/empty-state";
import { LearningCard } from "@/components/learning-card";
import { LearningControls } from "@/components/learning-controls";
import { ModeSelector } from "@/components/mode-selector";
import { SoundToggle } from "@/components/sound-toggle";
import { useLearningSession } from "@/hooks/use-learning-session";
import { usePronunciation } from "@/hooks/use-pronunciation";
import { useSoundPreference } from "@/hooks/use-sound-preference";

type TopicLessonClientProps = {
  topic: Topic;
};

const SWIPE_THRESHOLD = 40;

export function TopicLessonClient({ topic }: TopicLessonClientProps) {
  const { soundEnabled, toggleSound } = useSoundPreference();
  const { currentItem, progressLabel, mode, next, previous, setMode } = useLearningSession(topic.items);
  const { play, playEnglish, stop, isPlaying, playingLanguage, isSupported } = usePronunciation();
  const [isPressed, setIsPressed] = useState(false);
  const [notice, setNotice] = useState<string>("");
  const touchStartXRef = useRef<number | null>(null);

  const playCurrent = useCallback(async () => {
    if (!soundEnabled) {
      return;
    }

    if (!isSupported) {
      setNotice("Thiết bị chưa hỗ trợ phát âm tự động.");
      return;
    }

    setNotice("");
    await play(currentItem);
  }, [currentItem, isSupported, play, soundEnabled]);

  const handleSpeak = useCallback(async () => {
    setIsPressed(true);
    await playCurrent();
    window.setTimeout(() => setIsPressed(false), 180);
  }, [playCurrent]);

  const handleNext = useCallback(async () => {
    stop();
    next();
  }, [next, stop]);

  const handlePrevious = useCallback(async () => {
    stop();
    previous();
  }, [previous, stop]);

  const handleSpeakEnglish = useCallback(async () => {
    if (!soundEnabled) {
      return;
    }

    if (!isSupported) {
      setNotice("Thiết bị chưa hỗ trợ phát âm tiếng Anh.");
      return;
    }

    const didSpeak = await playEnglish(currentItem);

    if (!didSpeak) {
      setNotice("Thiết bị chưa có giọng đọc tiếng Anh.");
      return;
    }

    setNotice("");
  }, [currentItem, isSupported, playEnglish, soundEnabled]);

  useEffect(() => {
    const onKeyDown = async (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        await handleNext();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        await handlePrevious();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleNext, handlePrevious]);

  if (!topic.items.length) {
    return <EmptyState title="Chưa có dữ liệu" description="Chủ đề này sẽ sớm được cập nhật." />;
  }

  return (
    <main
      className="lesson-playground"
      style={{ "--lesson-accent": topic.themeColor } as CSSProperties}
      onTouchStart={(event) => {
        touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const startX = touchStartXRef.current;

        if (startX === null) {
          return;
        }

        const endX = event.changedTouches[0]?.clientX ?? startX;
        const deltaX = endX - startX;

        if (deltaX < -SWIPE_THRESHOLD) {
          void handleNext();
        }

        if (deltaX > SWIPE_THRESHOLD) {
          void handlePrevious();
        }

        touchStartXRef.current = null;
      }}
    >
      <AppHeader
        title={topic.name}
        subtitle="Cùng bé khám phá"
        leftSlot={<BackHomeButton />}
        rightSlot={
          <div className="flex items-center gap-2">
            <SoundToggle
              soundEnabled={soundEnabled}
              onToggle={() => {
                stop();
                toggleSound();
              }}
            />
          </div>
        }
      />

      <section className="play-content" aria-label={`Học ${topic.name.toLowerCase()}`}>
        <LearningCard
          item={currentItem}
          isPressed={isPressed}
          isPlaying={isPlaying}
          isVietnamesePlaying={isPlaying && playingLanguage === "vi"}
          isEnglishPlaying={isPlaying && playingLanguage === "en"}
          onSpeak={() => void handleSpeak()}
          onSpeakEnglish={() => void handleSpeakEnglish()}
        />

        <LearningControls
          onPrevious={() => void handlePrevious()}
          onNext={() => void handleNext()}
          progressLabel={progressLabel}
        />

        <details className="play-parent-settings">
          <summary><SlidersHorizontal size={16} aria-hidden="true" /> Dành cho ba mẹ <ChevronDown size={16} aria-hidden="true" /></summary>
          <ModeSelector
            mode={mode}
            onChange={(nextMode) => {
              stop();
              setMode(nextMode);
            }}
          />
        </details>

        {notice ? (
          <p className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-muted shadow-sm">{notice}</p>
        ) : null}
      </section>
    </main>
  );
}
