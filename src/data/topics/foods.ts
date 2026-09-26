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
    { id: "food-rice", name: "Cơm", speechText: "Cơm", image: "/images/foods/rice.svg" },
    { id: "food-porridge", name: "Cháo", speechText: "Cháo", image: "/images/foods/porridge.svg" },
    { id: "food-bread", name: "Bánh mì", speechText: "Bánh mì", image: "/images/foods/bread.svg" },
    { id: "food-egg", name: "Trứng", speechText: "Trứng", image: "/images/foods/egg.svg" },
    { id: "food-meat", name: "Thịt", speechText: "Thịt", image: "/images/foods/meat.svg" },
    { id: "food-fish", name: "Cá", speechText: "Cá", image: "/images/foods/fish.svg" },
    { id: "food-vegetable", name: "Rau", speechText: "Rau", image: "/images/foods/vegetable.svg" },
    { id: "food-soup", name: "Canh", speechText: "Canh", image: "/images/foods/soup.svg" },
    { id: "food-noodle", name: "Mì", speechText: "Mì", image: "/images/foods/noodle.svg" },
    { id: "food-shrimp", name: "Tôm", speechText: "Tôm", image: "/images/foods/shrimp.svg" },
    { id: "food-crab", name: "Cua", speechText: "Cua", image: "/images/foods/crab.svg" },
    { id: "food-banana", name: "Chuối", speechText: "Chuối", image: "/images/foods/banana.svg" },
    { id: "food-apple", name: "Táo", speechText: "Táo", image: "/images/foods/apple.svg" },
    { id: "food-milk", name: "Sữa", speechText: "Sữa", image: "/images/foods/milk.svg" },
    { id: "food-yogurt", name: "Sữa chua", speechText: "Sữa chua", image: "/images/foods/yogurt.svg" },
    { id: "food-cake", name: "Bánh ngọt", speechText: "Bánh ngọt", image: "/images/foods/cake.svg" },
  ],
};
