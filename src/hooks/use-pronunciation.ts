"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LearningItem } from "@/types/learning";

type UsePronunciationResult = {
  play: (item: LearningItem) => Promise<void>;
  stop: () => void;
  isPlaying: boolean;
  isSupported: boolean;
};

export function usePronunciation(): UsePronunciationResult {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const isSupported = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return typeof window.Audio !== "undefined" || typeof window.speechSynthesis !== "undefined";
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audioRef.current = null;
      audio.onplay = audio.onended = audio.onpause = audio.onerror = null;
      audio.pause();
      audio.currentTime = 0;
    }

    if (typeof window !== "undefined" && window.speechSynthesis) {
      utteranceRef.current = null;
      window.speechSynthesis.cancel();
    }

    setIsPlaying(false);
  }, []);

  const speakBySpeechApi = useCallback(
    (speechText: string) => {
      if (typeof window === "undefined" || typeof window.speechSynthesis === "undefined") {
        setIsPlaying(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.lang = "vi-VN";
      utterance.rate = 0.75;
      utterance.pitch = 1;
      utterance.onstart = () => {
        if (utteranceRef.current === utterance) setIsPlaying(true);
      };
      utterance.onend = utterance.onerror = () => {
        if (utteranceRef.current === utterance) setIsPlaying(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [setIsPlaying],
  );

  const play = useCallback(
    async (item: LearningItem) => {
      stop();

      if (item.audio) {
        const audio = new Audio(item.audio);
        audioRef.current = audio;

        audio.onplay = () => {
          if (audioRef.current === audio) setIsPlaying(true);
        };
        audio.onended = audio.onpause = () => {
          if (audioRef.current === audio) setIsPlaying(false);
        };
        const fallback = () => {
          // Both the error event and play() rejection can report the same failure.
          // Ignore failures from an audio clip that was stopped or replaced.
          if (audioRef.current !== audio) return;
          audioRef.current = null;
          audio.onplay = audio.onended = audio.onpause = audio.onerror = null;
          audio.pause();
          setIsPlaying(false);
          speakBySpeechApi(item.speechText);
        };
        audio.onerror = fallback;

        try {
          await audio.play();
          return;
        } catch {
          fallback();
          return;
        }
      }

      speakBySpeechApi(item.speechText);
    },
    [speakBySpeechApi, stop],
  );

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return { play, stop, isPlaying, isSupported };
}
