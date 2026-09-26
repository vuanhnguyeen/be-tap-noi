"use client";

import { SoundToggle } from "@/components/sound-toggle";
import { useSoundPreference } from "@/hooks/use-sound-preference";

export function HomeHeaderActions() {
  const { soundEnabled, toggleSound } = useSoundPreference();

  return <SoundToggle soundEnabled={soundEnabled} onToggle={toggleSound} />;
}
