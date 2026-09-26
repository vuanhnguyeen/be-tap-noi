import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getTopicBySlug, TOPICS } from "@/data/topics";

describe("topics data", () => {
  it("đủ 12 chủ đề", () => {
    expect(TOPICS).toHaveLength(12);
  });

  it("đủ chính xác 223 từ", () => {
    const count = TOPICS.reduce((sum, topic) => sum + topic.items.length, 0);
    expect(count).toBe(223);
  });

  it("every declared MP3 path points to a nonempty local file", () => {
    for (const item of TOPICS.flatMap((topic) => topic.items)) {
      if (!item.audio) {
        continue;
      }

      expect(item.audio, item.id).toMatch(/^\/audio\/.+\.mp3$/);
      const file = join(process.cwd(), "public", item.audio);
      expect(existsSync(file), item.id).toBe(true);
      expect(statSync(file).size, item.id).toBeGreaterThan(0);
    }
  });

  it("slug hợp lệ phải truy cập được", () => {
    expect(getTopicBySlug("con-vat")?.name).toBe("Con vật");
    expect(getTopicBySlug("mau-sac")?.name).toBe("Màu sắc");
  });

  it("slug không tồn tại trả về undefined", () => {
    expect(getTopicBySlug("khong-ton-tai")).toBeUndefined();
  });
});
