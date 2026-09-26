export type LearningItem = {
  id: string;
  name: string;
  speechText: string;
  image: string;
  audio?: string;
  emoji?: string;
  color?: string;
  notes?: string;
};

export type Topic = {
  id: string;
  slug: string;
  name: string;
  description: string;
  coverImage?: string;
  coverEmoji?: string;
  themeColor: string;
  items: LearningItem[];
};

export type LearningMode = "sequential" | "random";
