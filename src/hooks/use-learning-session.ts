"use client";

import { useMemo, useState } from "react";
import type { LearningItem, LearningMode } from "@/types/learning";
import {
  createRandomSession,
  getCurrentIndex,
  getSequentialNext,
  getSequentialPrevious,
  nextRandom,
  previousRandom,
  type RandomSessionState,
} from "@/lib/learning-session";

const STORAGE_KEY = "learning-mode";

type UseLearningSessionResult = {
  currentItem: LearningItem;
  currentIndex: number;
  progressLabel: string;
  mode: LearningMode;
  next: () => void;
  previous: () => void;
  setMode: (mode: LearningMode) => void;
};

export function useLearningSession(items: LearningItem[]): UseLearningSessionResult {
  const [mode, setModeState] = useState<LearningMode>(() => {
    if (typeof window === "undefined") {
      return "sequential";
    }

    const savedMode = window.localStorage.getItem(STORAGE_KEY);
    return savedMode === "random" ? "random" : "sequential";
  });
  const [sequentialIndex, setSequentialIndex] = useState(0);
  const [randomState, setRandomState] = useState<RandomSessionState>(() => createRandomSession(items.length, 0));

  const currentIndex = useMemo(() => {
    return getCurrentIndex(mode, sequentialIndex, randomState);
  }, [mode, sequentialIndex, randomState]);

  const currentItem = items[currentIndex] ?? items[0];

  const setMode = (nextMode: LearningMode) => {
    setModeState(nextMode);
    window.localStorage.setItem(STORAGE_KEY, nextMode);

    if (nextMode === "random") {
      setRandomState(createRandomSession(items.length, currentIndex));
    }
  };

  const next = () => {
    if (mode === "sequential") {
      setSequentialIndex((prev) => getSequentialNext(items.length, prev));
      return;
    }

    setRandomState((prev) => nextRandom(items.length, currentIndex, prev));
  };

  const previous = () => {
    if (mode === "sequential") {
      setSequentialIndex((prev) => getSequentialPrevious(items.length, prev));
      return;
    }

    setRandomState((prev) => previousRandom(prev));
  };

  const progressLabel = `${currentIndex + 1} / ${items.length}`;

  return {
    currentItem,
    currentIndex,
    progressLabel,
    mode,
    next,
    previous,
    setMode,
  };
}
