import { Volume2 } from "lucide-react";

type PronunciationButtonProps = {
  onClick: () => void;
  isPlaying: boolean;
  ariaLabel: string;
  label?: string;
  variant?: "vietnamese" | "english";
};

export function PronunciationButton({
  onClick,
  isPlaying,
  ariaLabel,
  label = "Nghe",
  variant = "vietnamese",
}: PronunciationButtonProps) {
  const className = variant === "english"
    ? "play-listen-button play-listen-button--english"
    : "play-listen-button play-listen-button--vietnamese";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={className}
      data-playing={isPlaying}
    >
      <span className="play-listen-icon"><Volume2 aria-hidden="true" /></span>
      <span>{label}</span>
      <span className="play-sound-bars" aria-hidden="true"><i /><i /><i /></span>
    </button>
  );
}
