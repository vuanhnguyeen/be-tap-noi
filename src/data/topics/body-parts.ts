import type { Topic } from "@/types/learning";

export const bodyPartsTopic: Topic = {
  id: "topic-body-parts",
  slug: "bo-phan-co-the",
  name: "Bộ phận cơ thể",
  description: "Học nhiều bộ phận cơ thể gần gũi.",
  coverImage: "/images/noto/body-parts/eyes.svg",
  coverEmoji: "👀",
  themeColor: "#BE9B77",
  items: [
    { id: "body-eyes", name: "Mắt", speechText: "Mắt", audio: "/audio/body-parts/body-eyes.mp3", image: "/images/noto/body-parts/eyes.svg", emoji: "👀" },
    { id: "body-nose", name: "Mũi", speechText: "Mũi", audio: "/audio/body-parts/body-nose.mp3", image: "/images/noto/body-parts/nose.svg", emoji: "👃" },
    { id: "body-mouth", name: "Miệng", speechText: "Miệng", audio: "/audio/body-parts/body-mouth.mp3", image: "/images/noto/body-parts/mouth.svg", emoji: "👄" },
    { id: "body-ear", name: "Tai", speechText: "Tai", audio: "/audio/body-parts/body-ear.mp3", image: "/images/noto/body-parts/ear.svg", emoji: "👂" },
    { id: "body-hand", name: "Tay", speechText: "Tay", audio: "/audio/body-parts/body-hand.mp3", image: "/images/noto/body-parts/hand.svg", emoji: "✋" },
    { id: "body-arm", name: "Cánh tay", speechText: "Cánh tay", audio: "/audio/body-parts/body-arm.mp3", image: "/images/noto/body-parts/arm.svg", emoji: "💪" },
    { id: "body-leg", name: "Chân", speechText: "Chân", audio: "/audio/body-parts/body-leg.mp3", image: "/images/noto/body-parts/leg.svg", emoji: "🦵" },
    { id: "body-foot", name: "Bàn chân", speechText: "Bàn chân", audio: "/audio/body-parts/body-foot.mp3", image: "/images/noto/body-parts/foot.svg", emoji: "🦶" },
    { id: "body-tooth", name: "Răng", speechText: "Răng", audio: "/audio/body-parts/body-tooth.mp3", image: "/images/noto/body-parts/tooth.svg", emoji: "🦷" },
    { id: "body-tongue", name: "Lưỡi", speechText: "Lưỡi", audio: "/audio/body-parts/body-tongue.mp3", image: "/images/noto/body-parts/tongue.svg", emoji: "👅" },
    { id: "body-heart", name: "Tim", speechText: "Tim", audio: "/audio/body-parts/body-heart.mp3", image: "/images/noto/body-parts/heart.svg", emoji: "❤️" },
    { id: "body-brain", name: "Não", speechText: "Não", audio: "/audio/body-parts/body-brain.mp3", image: "/images/noto/body-parts/brain.svg", emoji: "🧠" },
    { id: "body-bone", name: "Xương", speechText: "Xương", audio: "/audio/body-parts/body-bone.mp3", image: "/images/noto/body-parts/bone.svg", emoji: "🦴" },
  ],
};
