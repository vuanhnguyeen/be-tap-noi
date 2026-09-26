import { ListOrdered, Shuffle } from "lucide-react";
import type { LearningMode } from "@/types/learning";

type ModeSelectorProps = {
  mode: LearningMode;
  onChange: (mode: LearningMode) => void;
};

export function ModeSelector({ mode, onChange }: ModeSelectorProps) {
  return (
    <div
      role="group"
      aria-label="Chế độ học"
      className="grid grid-cols-2 gap-2 rounded-2xl bg-white p-2 shadow-sm"
    >
      <button
        type="button"
        onClick={() => onChange("sequential")}
        aria-pressed={mode === "sequential"}
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange/70 sm:text-base ${
          mode === "sequential" ? "bg-yellow text-foreground" : "bg-[#f8f2e7] text-muted"
        }`}
      >
        <ListOrdered className="h-5 w-5" aria-hidden="true" /> Theo thứ tự
      </button>
      <button
        type="button"
        onClick={() => onChange("random")}
        aria-pressed={mode === "random"}
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange/70 sm:text-base ${
          mode === "random" ? "bg-pink text-foreground" : "bg-[#f8f2e7] text-muted"
        }`}
      >
        <Shuffle className="h-5 w-5" aria-hidden="true" /> Ngẫu nhiên
      </button>
    </div>
  );
}
