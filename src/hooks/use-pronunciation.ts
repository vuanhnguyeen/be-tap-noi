"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LearningItem } from "@/types/learning";

type PlaybackLanguage = "vi" | "en";

type UsePronunciationResult = {
  play: (item: LearningItem) => Promise<void>;
  playEnglish: (item: LearningItem) => Promise<boolean>;
  stop: () => void;
  isPlaying: boolean;
  playingLanguage: PlaybackLanguage | null;
  isSupported: boolean;
};

const NUMBER_WORDS: Record<number, string> = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
};

const ALPHABET_SPECIAL_ENGLISH: Record<string, string> = {
  aa: "A circumflex",
  aw: "A breve",
  dd: "D stroke",
  ee: "E circumflex",
  oo: "O circumflex",
  ow: "O horn",
  uw: "U horn",
};

function toTitleCase(text: string): string {
  return text
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getEnglishFallbackText(item: LearningItem): string {
  const explicitEnglish = item.englishText?.trim();

  if (explicitEnglish) {
    return explicitEnglish;
  }

  if (item.id.startsWith("number-")) {
    const rawNumber = Number(item.id.replace("number-", ""));

    if (Number.isInteger(rawNumber) && rawNumber in NUMBER_WORDS) {
      return NUMBER_WORDS[rawNumber];
    }

    return item.id.replace("number-", "number ");
  }

  if (item.id.startsWith("alphabet-")) {
    const key = item.id.replace("alphabet-", "").toLowerCase();

    if (ALPHABET_SPECIAL_ENGLISH[key]) {
      return `Letter ${ALPHABET_SPECIAL_ENGLISH[key]}`;
    }

    if (key.length === 1) {
      return `Letter ${key.toUpperCase()}`;
    }

    return `Letter ${toTitleCase(key.replace(/-/g, " "))}`;
  }

  const chunks = item.id.split("-").slice(1);

  if (chunks.length > 0) {
    return toTitleCase(chunks.join(" "));
  }

  return item.name;
}

function getVoiceForLanguage(language: PlaybackLanguage): SpeechSynthesisVoice | undefined {
  if (typeof window === "undefined" || typeof window.speechSynthesis === "undefined") {
    return undefined;
  }

  const voices = window.speechSynthesis.getVoices();
  const exactLanguage = language === "vi" ? "vi-vn" : "en-us";
  const prefix = language === "vi" ? "vi" : "en";

  return voices.find((voice) => voice.lang.toLowerCase() === exactLanguage)
    ?? voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix));
}

export function usePronunciation(): UsePronunciationResult {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingLanguage, setPlayingLanguage] = useState<PlaybackLanguage | null>(null);

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
    setPlayingLanguage(null);
  }, []);

  const speakBySpeechApi = useCallback(
    (speechText: string, language: PlaybackLanguage): boolean => {
      if (typeof window === "undefined" || typeof window.speechSynthesis === "undefined") {
        setIsPlaying(false);
        setPlayingLanguage(null);
        return false;
      }

      const selectedVoice = getVoiceForLanguage(language);

      if (!selectedVoice) {
        setIsPlaying(false);
        setPlayingLanguage(null);
        return false;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
      utterance.rate = language === "vi" ? 0.75 : 0.35;
      utterance.pitch = language === "vi" ? 1 : 1.04;
      utterance.volume = 1;
      utterance.onstart = () => {
        if (utteranceRef.current === utterance) {
          setIsPlaying(true);
          setPlayingLanguage(language);
        }
      };
      utterance.onend = utterance.onerror = () => {
        if (utteranceRef.current === utterance) {
          setIsPlaying(false);
          setPlayingLanguage(null);
        }
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      return true;
    },
    [setIsPlaying, setPlayingLanguage],
  );

  const play = useCallback(
    async (item: LearningItem) => {
      stop();

      if (item.audio) {
        const audio = new Audio(item.audio);
        audioRef.current = audio;

        audio.onplay = () => {
          if (audioRef.current === audio) {
            setIsPlaying(true);
            setPlayingLanguage("vi");
          }
        };
        audio.onended = audio.onpause = () => {
          if (audioRef.current === audio) {
            setIsPlaying(false);
            setPlayingLanguage(null);
          }
        };
        const fallback = () => {
          // Both the error event and play() rejection can report the same failure.
          // Ignore failures from an audio clip that was stopped or replaced.
          if (audioRef.current !== audio) return;
          audioRef.current = null;
          audio.onplay = audio.onended = audio.onpause = audio.onerror = null;
          audio.pause();
          setIsPlaying(false);
          setPlayingLanguage(null);
          speakBySpeechApi(item.speechText, "vi");
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

      speakBySpeechApi(item.speechText, "vi");
    },
    [setPlayingLanguage, speakBySpeechApi, stop],
  );

  const playEnglish = useCallback(
    async (item: LearningItem): Promise<boolean> => {
      stop();
      const englishText = getEnglishFallbackText(item);

      if (!englishText.trim()) {
        return false;
      }

      return speakBySpeechApi(englishText, "en");
    },
    [speakBySpeechApi, stop],
  );

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return { play, playEnglish, stop, isPlaying, playingLanguage, isSupported };
}
