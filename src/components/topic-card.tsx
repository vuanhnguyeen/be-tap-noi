import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shapes } from "lucide-react";
import type { Topic } from "@/types/learning";

type TopicCardProps = {
  topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link
      href={`/hoc/${topic.slug}`}
      aria-label={`Khám phá ${topic.name}`}
      className="home-topic"
      style={{ "--topic-accent": topic.themeColor } as CSSProperties}
    >
      <span className="home-topic-picture" aria-hidden="true">
        <span className="home-topic-halo" />
        {topic.coverImage ? (
          <Image src={topic.coverImage} alt="" width={128} height={128} className="home-topic-image" />
        ) : topic.slug === "mau-sac" ? (
          <span className="home-color-toys"><i /><i /><i /></span>
        ) : (
          <Shapes className="home-topic-image" />
        )}
      </span>
      <span className="home-topic-copy">
        <span className="home-topic-title">{topic.name}</span>
        <span className="home-topic-count">{topic.items.length} từ để khám phá</span>
      </span>
      <span className="home-topic-arrow" aria-hidden="true"><ArrowRight /></span>
    </Link>
  );
}
