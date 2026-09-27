import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicLessonClient } from "@/components/topic-lesson-client";
import { getTopicBySlug, TOPICS } from "@/data/topics";

export function generateStaticParams() {
  return TOPICS.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hoc/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return {
      title: "Không tìm thấy chủ đề",
    };
  }

  return {
    title: `${topic.name} | Bé Tập Nói`,
    description: topic.description,
  };
}

export default async function TopicPage({ params }: PageProps<"/hoc/[slug]">) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return <TopicLessonClient topic={topic} />;
}
