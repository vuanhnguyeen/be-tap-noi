"use client";

import { useState } from "react";

const STORAGE_KEY = "sound-enabled";

export function useSoundPreference() {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved !== "false";
  });

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  return {
    soundEnabled,
    toggleSound,
    setSoundEnabled,
  };
}
