import type { Topic } from "@/types/learning";

export const actionsTopic: Topic = {
  id: "topic-actions",
  slug: "hanh-dong",
  name: "Hành động",
  description: "Bé học các động từ quen thuộc mỗi ngày.",
  coverImage: "/images/noto/topic-covers/actions.svg",
  coverEmoji: "🏃",
  themeColor: "#42BEC9",
  items: [
    { id: "action-eat", name: "Ăn", speechText: "Ăn", image: "/images/actions/eat.svg" },
    { id: "action-drink", name: "Uống", speechText: "Uống", image: "/images/actions/drink.svg" },
    { id: "action-sleep", name: "Ngủ", speechText: "Ngủ", image: "/images/actions/sleep.svg" },
    { id: "action-run", name: "Chạy", speechText: "Chạy", image: "/images/actions/run.svg" },
    { id: "action-sit", name: "Ngồi", speechText: "Ngồi", image: "/images/actions/sit.svg" },
    { id: "action-stand", name: "Đứng", speechText: "Đứng", image: "/images/actions/stand.svg" },
    { id: "action-open", name: "Mở", speechText: "Mở", image: "/images/actions/open.svg" },
    { id: "action-close", name: "Đóng", speechText: "Đóng", image: "/images/actions/close.svg" },
    { id: "action-clap", name: "Vỗ tay", speechText: "Vỗ tay", image: "/images/actions/clap.svg" },
    { id: "action-wave", name: "Vẫy tay", speechText: "Vẫy tay", image: "/images/actions/wave.svg" },
    { id: "action-laugh", name: "Cười", speechText: "Cười", image: "/images/actions/laugh.svg" },
    { id: "action-cry", name: "Khóc", speechText: "Khóc", image: "/images/actions/cry.svg" },
    { id: "action-jump", name: "Nhảy", speechText: "Nhảy", image: "/images/actions/jump.svg" },
    { id: "action-wash", name: "Rửa tay", speechText: "Rửa tay", image: "/images/actions/wash.svg" },
    { id: "action-brush", name: "Đánh răng", speechText: "Đánh răng", image: "/images/actions/brush.svg" },
    { id: "action-read", name: "Đọc sách", speechText: "Đọc sách", image: "/images/actions/read.svg" },
  ],
};
