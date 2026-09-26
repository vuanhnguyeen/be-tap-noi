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
    { id: "family-family", name: "Gia đình", speechText: "Gia đình", image: "/images/family/family.svg" },
    { id: "family-father", name: "Ba", speechText: "Ba", image: "/images/family/father.svg" },
    { id: "family-mother", name: "Mẹ", speechText: "Mẹ", image: "/images/family/mother.svg" },
    { id: "family-grandfather", name: "Ông", speechText: "Ông", image: "/images/family/grandfather.svg" },
    { id: "family-grandmother", name: "Bà", speechText: "Bà", image: "/images/family/grandmother.svg" },
    { id: "family-older-brother", name: "Anh", speechText: "Anh", image: "/images/family/older-brother.svg" },
    { id: "family-older-sister", name: "Chị", speechText: "Chị", image: "/images/family/older-sister.svg" },
    { id: "family-younger-brother", name: "Em trai", speechText: "Em trai", image: "/images/family/younger-brother.svg" },
    { id: "family-younger-sister", name: "Em bé", speechText: "Em bé", image: "/images/family/younger-sister.svg" },
    { id: "family-aunt", name: "Cô", speechText: "Cô", image: "/images/family/aunt.svg" },
  ],
};
