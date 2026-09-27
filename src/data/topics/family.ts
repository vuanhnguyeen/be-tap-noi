import type { Topic } from "@/types/learning";

export const familyTopic: Topic = {
  id: "topic-family",
  slug: "gia-dinh",
  name: "Gia đình",
  description: "Bé học gọi tên những người thân trong gia đình.",
  coverImage: "/images/noto/topic-covers/family.svg",
  coverEmoji: "👨‍👩‍👧‍👦",
  themeColor: "#58BE94",
  items: [
    { id: "family-family", name: "Gia đình", speechText: "Gia đình", audio: "/audio/family/hoai-my/family-family.mp3", image: "/images/family/family.svg" },
    { id: "family-father", name: "Ba", speechText: "Ba", audio: "/audio/family/hoai-my/family-father.mp3", image: "/images/family/father.svg" },
    { id: "family-mother", name: "Mẹ", speechText: "Mẹ", audio: "/audio/family/hoai-my/family-mother.mp3", image: "/images/family/mother.svg" },
    { id: "family-grandfather", name: "Ông", speechText: "Ông", audio: "/audio/family/hoai-my/family-grandfather.mp3", image: "/images/family/grandfather.svg" },
    { id: "family-grandmother", name: "Bà", speechText: "Bà", audio: "/audio/family/hoai-my/family-grandmother.mp3", image: "/images/family/grandmother.svg" },
    { id: "family-older-brother", name: "Anh", speechText: "Anh", audio: "/audio/family/hoai-my/family-older-brother.mp3", image: "/images/family/older-brother.svg" },
    { id: "family-older-sister", name: "Chị", speechText: "Chị", audio: "/audio/family/hoai-my/family-older-sister.mp3", image: "/images/family/older-sister.svg" },
    { id: "family-younger-brother", name: "Em trai", speechText: "Em trai", audio: "/audio/family/hoai-my/family-younger-brother.mp3", image: "/images/family/younger-brother.svg" },
    { id: "family-younger-sister", name: "Em bé", speechText: "Em bé", audio: "/audio/family/hoai-my/family-younger-sister.mp3", image: "/images/family/younger-sister.svg" },
    { id: "family-aunt", name: "Cô", speechText: "Cô", audio: "/audio/family/hoai-my/family-aunt.mp3", image: "/images/family/aunt.svg" },
  ],
};
