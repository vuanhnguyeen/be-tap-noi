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
    { id: "action-eat", name: "Ăn", speechText: "Ăn", audio: "/audio/actions/hoai-my/action-eat.mp3", image: "/images/actions/eat.svg" },
    { id: "action-drink", name: "Uống", speechText: "Uống", audio: "/audio/actions/hoai-my/action-drink.mp3", image: "/images/actions/drink.svg" },
    { id: "action-sleep", name: "Ngủ", speechText: "Ngủ", audio: "/audio/actions/hoai-my/action-sleep.mp3", image: "/images/actions/sleep.svg" },
    { id: "action-run", name: "Chạy", speechText: "Chạy", audio: "/audio/actions/hoai-my/action-run.mp3", image: "/images/actions/run.svg" },
    { id: "action-sit", name: "Ngồi", speechText: "Ngồi", audio: "/audio/actions/hoai-my/action-sit.mp3", image: "/images/actions/sit.svg" },
    { id: "action-stand", name: "Đứng", speechText: "Đứng", audio: "/audio/actions/hoai-my/action-stand.mp3", image: "/images/actions/stand.svg" },
    { id: "action-open", name: "Mở", speechText: "Mở", audio: "/audio/actions/hoai-my/action-open.mp3", image: "/images/actions/open.svg" },
    { id: "action-close", name: "Đóng", speechText: "Đóng", audio: "/audio/actions/hoai-my/action-close.mp3", image: "/images/actions/close.svg" },
    { id: "action-clap", name: "Vỗ tay", speechText: "Vỗ tay", audio: "/audio/actions/hoai-my/action-clap.mp3", image: "/images/actions/clap.svg" },
    { id: "action-wave", name: "Vẫy tay", speechText: "Vẫy tay", audio: "/audio/actions/hoai-my/action-wave.mp3", image: "/images/actions/wave.svg" },
    { id: "action-laugh", name: "Cười", speechText: "Cười", audio: "/audio/actions/hoai-my/action-laugh.mp3", image: "/images/actions/laugh.svg" },
    { id: "action-cry", name: "Khóc", speechText: "Khóc", audio: "/audio/actions/hoai-my/action-cry.mp3", image: "/images/actions/cry.svg" },
    { id: "action-jump", name: "Nhảy", speechText: "Nhảy", audio: "/audio/actions/hoai-my/action-jump.mp3", image: "/images/actions/jump.svg" },
    { id: "action-wash", name: "Rửa tay", speechText: "Rửa tay", audio: "/audio/actions/hoai-my/action-wash.mp3", image: "/images/actions/wash.svg" },
    { id: "action-brush", name: "Đánh răng", speechText: "Đánh răng", audio: "/audio/actions/hoai-my/action-brush.mp3", image: "/images/actions/brush.svg" },
    { id: "action-read", name: "Đọc sách", speechText: "Đọc sách", audio: "/audio/actions/hoai-my/action-read.mp3", image: "/images/actions/read.svg" },
  ],
};
