import type { Topic } from "@/types/learning";
import { actionsTopic } from "@/data/topics/actions";
import { alphabetTopic } from "@/data/topics/alphabet";
import { animalsTopic } from "@/data/topics/animals";
import { bodyPartsTopic } from "@/data/topics/body-parts";
import { clothingTopic } from "@/data/topics/clothing";
import { colorsTopic } from "@/data/topics/colors";
import { familyTopic } from "@/data/topics/family";
import { foodsTopic } from "@/data/topics/foods";
import { fruitsTopic } from "@/data/topics/fruits";
import { jobsTopic } from "@/data/topics/jobs";
import { numbersTopic } from "@/data/topics/numbers";
import { objectsTopic } from "@/data/topics/objects";
import { vehiclesTopic } from "@/data/topics/vehicles";

export const TOPICS: Topic[] = [
  colorsTopic,
  numbersTopic,
  alphabetTopic,
  familyTopic,
  actionsTopic,
  foodsTopic,
  clothingTopic,
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
