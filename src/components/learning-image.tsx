import Image from "next/image";
import type { LearningItem } from "@/types/learning";

type LearningImageProps = {
  item: LearningItem;
};

export function LearningImage({ item }: LearningImageProps) {
  if (item.color) {
    return (
      <div className="flex w-full items-center justify-center">
        <div className="grid h-[54vw] min-h-[220px] max-h-[300px] w-[54vw] min-w-[220px] max-w-[300px] place-items-center rounded-full bg-white p-6 shadow-inner">
          <div
            className="h-full w-full rounded-full border-8 border-white shadow-sm"
            style={{ backgroundColor: item.color }}
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center">
      <Image
        src={item.image}
        alt={item.name}
        width={320}
        height={320}
        priority
        className="h-[54vw] min-h-[220px] max-h-[320px] w-[54vw] min-w-[220px] max-w-[320px] object-contain"
      />
    </div>
  );
}
