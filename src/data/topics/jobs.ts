import type { Topic } from "@/types/learning";

export const jobsTopic: Topic = {
  id: "topic-jobs",
  slug: "nghe-nghiep",
  name: "Nghề nghiệp",
  description: "Bé làm quen với nhiều nghề nghiệp hơn.",
  coverImage: "/images/noto/jobs/doctor.svg",
  coverEmoji: "👩‍⚕️",
  themeColor: "#CE85CB",
  items: [
    { id: "job-doctor", name: "Bác sĩ", speechText: "Bác sĩ", audio: "/audio/jobs/job-doctor.mp3", image: "/images/noto/jobs/doctor.svg", emoji: "👩‍⚕️" },
    { id: "job-teacher", name: "Giáo viên", speechText: "Giáo viên", audio: "/audio/jobs/job-teacher.mp3", image: "/images/noto/jobs/teacher.svg", emoji: "🧑‍🏫" },
    { id: "job-police", name: "Công an", speechText: "Công an", audio: "/audio/jobs/job-police.mp3", image: "/images/noto/jobs/police.svg", emoji: "👮" },
    { id: "job-firefighter", name: "Lính cứu hỏa", speechText: "Lính cứu hỏa", audio: "/audio/jobs/job-firefighter.mp3", image: "/images/noto/jobs/firefighter.svg", emoji: "🧑‍🚒" },
    { id: "job-chef", name: "Đầu bếp", speechText: "Đầu bếp", audio: "/audio/jobs/job-chef.mp3", image: "/images/noto/jobs/chef.svg", emoji: "🧑‍🍳" },
    { id: "job-worker", name: "Công nhân", speechText: "Công nhân", audio: "/audio/jobs/job-worker.mp3", image: "/images/noto/jobs/worker.svg", emoji: "👷" },
    { id: "job-farmer", name: "Nông dân", speechText: "Nông dân", audio: "/audio/jobs/job-farmer.mp3", image: "/images/noto/jobs/farmer.svg", emoji: "🧑‍🌾" },
    { id: "job-pilot", name: "Phi công", speechText: "Phi công", audio: "/audio/jobs/job-pilot.mp3", image: "/images/noto/jobs/pilot.svg", emoji: "🧑‍✈️" },
    { id: "job-singer", name: "Ca sĩ", speechText: "Ca sĩ", audio: "/audio/jobs/job-singer.mp3", image: "/images/noto/jobs/singer.svg", emoji: "🧑‍🎤" },
    { id: "job-artist", name: "Họa sĩ", speechText: "Họa sĩ", audio: "/audio/jobs/job-artist.mp3", image: "/images/noto/jobs/artist.svg", emoji: "🧑‍🎨" },
    { id: "job-astronaut", name: "Phi hành gia", speechText: "Phi hành gia", audio: "/audio/jobs/job-astronaut.mp3", image: "/images/noto/jobs/astronaut.svg", emoji: "🧑‍🚀" },
    { id: "job-technologist", name: "Lập trình viên", speechText: "Lập trình viên", audio: "/audio/jobs/job-technologist.mp3", image: "/images/noto/jobs/technologist.svg", emoji: "🧑‍💻" },
    { id: "job-judge", name: "Thẩm phán", speechText: "Thẩm phán", audio: "/audio/jobs/job-judge.mp3", image: "/images/noto/jobs/judge.svg", emoji: "🧑‍⚖️" },
    { id: "job-student", name: "Học sinh", speechText: "Học sinh", audio: "/audio/jobs/job-student.mp3", image: "/images/noto/jobs/student.svg", emoji: "🧑‍🎓" },
  ],
};
