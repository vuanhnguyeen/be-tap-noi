import { TopicCard } from "@/components/topic-card";
import type { Topic } from "@/types/learning";

type TopicGridProps = {
  topics: Topic[];
};

export function TopicGrid({ topics }: TopicGridProps) {
  return (
    <div className="home-topic-grid">
      {topics.map((topic) => <TopicCard key={topic.id} topic={topic} />)}
    </div>
  );
}
