import { ArrowLeft, ArrowRight } from "lucide-react";

type LearningControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
  progressLabel: string;
};

export function LearningControls({ onPrevious, onNext, progressLabel }: LearningControlsProps) {
  return (
    <div className="play-navigation">
      <button type="button" onClick={onPrevious} aria-label="Từ trước" className="play-nav-button play-nav-previous">
        <ArrowLeft aria-hidden="true" /><span>Trước</span>
      </button>
      <div className="play-progress" aria-label={`Tiến trình ${progressLabel}`}>
        <span className="play-progress-dots" aria-hidden="true"><i /><i /><i /></span>
        <span>{progressLabel}</span>
      </div>
      <button type="button" onClick={onNext} aria-label="Từ tiếp theo" className="play-nav-button play-nav-next">
        <span>Tiếp</span><ArrowRight aria-hidden="true" />
      </button>
    </div>
  );
}
