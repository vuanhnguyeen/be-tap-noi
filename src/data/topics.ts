import type { Topic } from "@/types/learning";
import { animalsTopic } from "@/data/topics/animals";
import { bodyPartsTopic } from "@/data/topics/body-parts";
import { colorsTopic } from "@/data/topics/colors";
import { fruitsTopic } from "@/data/topics/fruits";
import { jobsTopic } from "@/data/topics/jobs";
import { objectsTopic } from "@/data/topics/objects";
import { vehiclesTopic } from "@/data/topics/vehicles";

export const TOPICS: Topic[] = [
  colorsTopic,
  animalsTopic,
  fruitsTopic,
  vehiclesTopic,
  objectsTopic,
  jobsTopic,
  bodyPartsTopic,
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}
