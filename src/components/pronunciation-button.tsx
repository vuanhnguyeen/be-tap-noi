import { Volume2 } from "lucide-react";

type PronunciationButtonProps = {
  onClick: () => void;
  isPlaying: boolean;
  ariaLabel: string;
  label?: string;
};

export function PronunciationButton({ onClick, isPlaying, ariaLabel, label = "Nghe" }: PronunciationButtonProps) {
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className="play-listen-button" data-playing={isPlaying}>
      <span className="play-listen-icon"><Volume2 aria-hidden="true" /></span>
      <span>{label}</span>
      <span className="play-sound-bars" aria-hidden="true"><i /><i /><i /></span>
    </button>
  );
}
