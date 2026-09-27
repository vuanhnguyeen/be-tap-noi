import type { Topic } from "@/types/learning";

export const foodsTopic: Topic = {
  id: "topic-foods",
  slug: "do-an",
  name: "Đồ ăn",
  description: "Bé học tên các món ăn và thực phẩm gần gũi.",
  coverImage: "/images/noto/topic-covers/foods.svg",
  coverEmoji: "🍚",
  themeColor: "#F3A261",
  items: [
    { id: "food-rice", name: "Cơm", speechText: "Cơm", audio: "/audio/foods/hoai-my/food-rice.mp3", image: "/images/foods/rice.svg" },
    { id: "food-porridge", name: "Cháo", speechText: "Cháo", audio: "/audio/foods/hoai-my/food-porridge.mp3", image: "/images/foods/porridge.svg" },
    { id: "food-bread", name: "Bánh mì", speechText: "Bánh mì", audio: "/audio/foods/hoai-my/food-bread.mp3", image: "/images/foods/bread.svg" },
    { id: "food-egg", name: "Trứng", speechText: "Trứng", audio: "/audio/foods/hoai-my/food-egg.mp3", image: "/images/foods/egg.svg" },
    { id: "food-meat", name: "Thịt", speechText: "Thịt", audio: "/audio/foods/hoai-my/food-meat.mp3", image: "/images/foods/meat.svg" },
    { id: "food-fish", name: "Cá", speechText: "Cá", audio: "/audio/foods/hoai-my/food-fish.mp3", image: "/images/foods/fish.svg" },
    { id: "food-vegetable", name: "Rau", speechText: "Rau", audio: "/audio/foods/hoai-my/food-vegetable.mp3", image: "/images/foods/vegetable.svg" },
    { id: "food-soup", name: "Canh", speechText: "Canh", audio: "/audio/foods/hoai-my/food-soup.mp3", image: "/images/foods/soup.svg" },
    { id: "food-noodle", name: "Mì", speechText: "Mì", audio: "/audio/foods/hoai-my/food-noodle.mp3", image: "/images/foods/noodle.svg" },
    { id: "food-shrimp", name: "Tôm", speechText: "Tôm", audio: "/audio/foods/hoai-my/food-shrimp.mp3", image: "/images/foods/shrimp.svg" },
    { id: "food-crab", name: "Cua", speechText: "Cua", audio: "/audio/foods/hoai-my/food-crab.mp3", image: "/images/foods/crab.svg" },
    { id: "food-banana", name: "Chuối", speechText: "Chuối", audio: "/audio/foods/hoai-my/food-banana.mp3", image: "/images/foods/banana.svg" },
    { id: "food-apple", name: "Táo", speechText: "Táo", audio: "/audio/foods/hoai-my/food-apple.mp3", image: "/images/foods/apple.svg" },
    { id: "food-milk", name: "Sữa", speechText: "Sữa", audio: "/audio/foods/hoai-my/food-milk.mp3", image: "/images/foods/milk.svg" },
    { id: "food-yogurt", name: "Sữa chua", speechText: "Sữa chua", audio: "/audio/foods/hoai-my/food-yogurt.mp3", image: "/images/foods/yogurt.svg" },
    { id: "food-cake", name: "Bánh ngọt", speechText: "Bánh ngọt", audio: "/audio/foods/hoai-my/food-cake.mp3", image: "/images/foods/cake.svg" },
  ],
};
