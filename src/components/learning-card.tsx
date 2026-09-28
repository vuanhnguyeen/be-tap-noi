import { Cloud, Flower2, Heart, Music2, Sparkles, Star } from "lucide-react";
import type { LearningItem } from "@/types/learning";
import { LearningImage } from "@/components/learning-image";
import { PronunciationButton } from "@/components/pronunciation-button";

type LearningCardProps = {
  item: LearningItem;
  isPressed: boolean;
  isPlaying: boolean;
  isVietnamesePlaying: boolean;
  isEnglishPlaying: boolean;
  onSpeak: () => void;
  onSpeakEnglish: () => void;
};

export function LearningCard({
  item,
  isPressed,
  isPlaying,
  isVietnamesePlaying,
  isEnglishPlaying,
  onSpeak,
  onSpeakEnglish,
}: LearningCardProps) {
  return (
    <div className="play-card" data-playing={isPlaying}>
      <Star className="play-deco play-deco-star-one" aria-hidden="true" />
      <Flower2 className="play-deco play-deco-flower" aria-hidden="true" />
      <Cloud className="play-deco play-deco-cloud" aria-hidden="true" />
      <Heart className="play-deco play-deco-heart" aria-hidden="true" />
      <Music2 className="play-deco play-deco-music" aria-hidden="true" />
      <Sparkles className="play-deco play-deco-spark" aria-hidden="true" />
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
        </span>
        <span className="play-word">{item.name}</span>
      </button>
      <div className="play-listen">
        <div className="play-listen-group">
          <PronunciationButton
            onClick={onSpeak}
            isPlaying={isVietnamesePlaying}
            ariaLabel={`Nghe tiếng Việt ${item.speechText}`}
            label="Việt"
            variant="vietnamese"
          />
          <PronunciationButton
            onClick={onSpeakEnglish}
            isPlaying={isEnglishPlaying}
            ariaLabel={`Nghe tiếng Anh ${item.name}`}
            label="Anh"
            variant="english"
          />
        </div>
      </div>
      <span className="play-ground play-ground-left" aria-hidden="true" />
      <span className="play-ground play-ground-right" aria-hidden="true" />
    </div>
  );
}
