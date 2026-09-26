"use client";

import { Volume2, VolumeX } from "lucide-react";

type SoundToggleProps = {
  soundEnabled: boolean;
  onToggle: () => void;
};

export function SoundToggle({ soundEnabled, onToggle }: SoundToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
      aria-pressed={soundEnabled}
      className="inline-flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-2xl bg-white px-4 text-sm font-bold text-foreground shadow-sm ring-primary-orange/60 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 active:scale-[0.98]"
    >
      {soundEnabled ? <Volume2 className="h-6 w-6" aria-hidden="true" /> : <VolumeX className="h-6 w-6" aria-hidden="true" />}
      <span className="hidden sm:inline">{soundEnabled ? "Âm thanh: Bật" : "Âm thanh: Tắt"}</span>
    </button>
  );
}
