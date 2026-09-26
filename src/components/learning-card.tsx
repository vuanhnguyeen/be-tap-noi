import { Hand, Sparkles, Star } from "lucide-react";
import type { LearningItem } from "@/types/learning";
import { LearningImage } from "@/components/learning-image";
import { PronunciationButton } from "@/components/pronunciation-button";

type LearningCardProps = {
  item: LearningItem;
  isPressed: boolean;
  isPlaying: boolean;
  onSpeak: () => void;
};

export function LearningCard({ item, isPressed, isPlaying, onSpeak }: LearningCardProps) {
  return (
    <div className="play-card" data-playing={isPlaying}>
      <div className="play-card-hint"><Hand size={18} aria-hidden="true" /> Chạm hình, nghe nhé!</div>
      <div className="play-sun" aria-hidden="true"><i /><i /><span /></div>
      <button
        type="button"
        onClick={onSpeak}
        aria-label={`Phát âm ${item.speechText}`}
        className="play-picture-button"
      >
        <span className="play-picture-scene" data-pressed={isPressed}>
          <span className="play-picture-halo" aria-hidden="true" />
          <Star className="play-star play-star-one" aria-hidden="true" />
          <Sparkles className="play-star play-star-two" aria-hidden="true" />
          <span className="play-picture" key={item.id}><LearningImage item={item} /></span>
          <span className="play-picture-shadow" aria-hidden="true" />
          <span className="play-touch" aria-hidden="true"><Hand size={25} /></span>
        </span>
        <span className="play-word">{item.name}</span>
      </button>
      <div className="play-listen">
        <PronunciationButton onClick={onSpeak} isPlaying={isPlaying} ariaLabel={`Nghe ${item.speechText}`} />
      </div>
      <span className="play-ground play-ground-left" aria-hidden="true" />
      <span className="play-ground play-ground-right" aria-hidden="true" />
    </div>
  );
}
