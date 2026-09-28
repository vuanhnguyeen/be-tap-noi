import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { LearningCard } from "@/components/learning-card";

it("each pronunciation button calls playback once, without nested buttons", () => {
  const onSpeak = vi.fn();
  const onSpeakEnglish = vi.fn();
  const { container } = render(<LearningCard
    item={{ id: "cat", name: "Con mèo", speechText: "Con mèo", image: "/cat.svg" }}
    isPressed={false}
    isPlaying={false}
    isVietnamesePlaying={false}
    isEnglishPlaying={false}
    onSpeak={onSpeak}
    onSpeakEnglish={onSpeakEnglish}
  />);
  expect(container.querySelector("button button")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Nghe tiếng Việt Con mèo" }));
  expect(onSpeak).toHaveBeenCalledTimes(1);
  const englishButton = screen.getByRole("button", { name: "Nghe tiếng Anh Con mèo" });
  expect(englishButton).not.toBeDisabled();
  fireEvent.click(englishButton);
  expect(onSpeakEnglish).toHaveBeenCalledTimes(1);
  expect(onSpeak).toHaveBeenCalledTimes(1);
  fireEvent.click(screen.getByRole("button", { name: "Phát âm Con mèo" }));
  expect(onSpeak).toHaveBeenCalledTimes(2);
});
