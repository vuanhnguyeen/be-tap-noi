import type { Topic } from "@/types/learning";

export const clothingTopic: Topic = {
  id: "topic-clothing",
  slug: "quan-ao",
  name: "Quần áo",
  description: "Bé gọi tên quần áo và những món đồ mặc hằng ngày.",
  coverImage: "/images/noto/clothing/shirt.svg",
  themeColor: "#91A57C",
  items: [
    { id: "clothing-shirt", name: "Áo", speechText: "Áo", image: "/images/noto/clothing/shirt.svg", audio: "/audio/clothing/clothing-shirt.mp3" },
    { id: "clothing-pants", name: "Quần", speechText: "Quần", image: "/images/noto/clothing/pants.svg", audio: "/audio/clothing/clothing-pants.mp3" },
    { id: "clothing-dress", name: "Váy", speechText: "Váy", image: "/images/noto/clothing/dress.svg", audio: "/audio/clothing/clothing-dress.mp3" },
    { id: "clothing-hat", name: "Nón", speechText: "Nón", image: "/images/noto/clothing/hat.svg", audio: "/audio/clothing/clothing-hat.mp3" },
    { id: "clothing-sandals", name: "Dép", speechText: "Dép", image: "/images/noto/clothing/sandals.svg", audio: "/audio/clothing/clothing-sandals.mp3" },
    { id: "clothing-shoes", name: "Giày", speechText: "Giày", image: "/images/noto/clothing/shoes.svg", audio: "/audio/clothing/clothing-shoes.mp3" },
    { id: "clothing-socks", name: "Vớ", speechText: "Vớ", image: "/images/noto/clothing/socks.svg", audio: "/audio/clothing/clothing-socks.mp3" },
    { id: "clothing-coat", name: "Áo khoác", speechText: "Áo khoác", image: "/images/noto/clothing/coat.svg", audio: "/audio/clothing/clothing-coat.mp3" },
    { id: "clothing-shorts", name: "Quần đùi", speechText: "Quần đùi", image: "/images/noto/clothing/shorts.svg", audio: "/audio/clothing/clothing-shorts.mp3" },
    { id: "clothing-scarf", name: "Khăn choàng", speechText: "Khăn choàng", image: "/images/noto/clothing/scarf.svg", audio: "/audio/clothing/clothing-scarf.mp3" },
    { id: "clothing-gloves", name: "Găng tay", speechText: "Găng tay", image: "/images/noto/clothing/gloves.svg", audio: "/audio/clothing/clothing-gloves.mp3" },
    { id: "clothing-boots", name: "Ủng", speechText: "Ủng", image: "/images/noto/clothing/boots.svg", audio: "/audio/clothing/clothing-boots.mp3" },
  ],
};
