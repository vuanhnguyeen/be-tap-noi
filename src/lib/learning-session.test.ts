import { describe, expect, it } from "vitest";
import {
  createRandomSession,
  getCurrentIndex,
  getSequentialNext,
  getSequentialPrevious,
  nextRandom,
  previousRandom,
} from "@/lib/learning-session";

describe("learning-session", () => {
  it("chuyển tiếp tuần tự và quay vòng cuối danh sách", () => {
    expect(getSequentialNext(3, 0)).toBe(1);
    expect(getSequentialNext(3, 2)).toBe(0);
  });

  it("quay lại tuần tự và không vượt index âm", () => {
    expect(getSequentialPrevious(3, 2)).toBe(1);
    expect(getSequentialPrevious(3, 0)).toBe(2);
  });

  it("random mode không lặp lại ngay lập tức", () => {
    const first = createRandomSession(5, 0);
    const second = nextRandom(5, 0, first);
    const nextIndex = second.order[second.cursor];

    expect(nextIndex).not.toBe(0);
  });

  it("random queue đi qua đủ item trước khi trộn lại", () => {
    let randomState = createRandomSession(4, 0);
    const seen = new Set<number>([0]);

    for (let i = 0; i < 3; i += 1) {
      randomState = nextRandom(4, getCurrentIndex("random", 0, randomState), randomState);
      seen.add(randomState.order[randomState.cursor]);
    }

    expect(seen.size).toBe(4);
  });

  it("previous ở random dùng lịch sử đúng", () => {
    let randomState = createRandomSession(4, 0);
    randomState = nextRandom(4, 0, randomState);
    randomState = nextRandom(4, randomState.order[randomState.cursor], randomState);

    const afterBack = previousRandom(randomState);
    expect(afterBack.cursor).toBe(randomState.cursor - 1);
  });
});
