import type { LearningMode } from "@/types/learning";

export type RandomSessionState = {
  order: number[];
  cursor: number;
  queue: number[];
};

function shuffle(input: number[]): number[] {
  const list = [...input];

  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  return list;
}

function buildQueue(length: number, avoidIndex: number): number[] {
  const allIndexes = Array.from({ length }, (_, index) => index).filter((index) => index !== avoidIndex);

  if (allIndexes.length === 0) {
    return [avoidIndex];
  }

  const shuffled = shuffle(allIndexes);

  return shuffled;
}

export function createRandomSession(length: number, startIndex: number): RandomSessionState {
  return {
    order: [startIndex],
    cursor: 0,
    queue: buildQueue(length, startIndex),
  };
}

export function getSequentialNext(length: number, currentIndex: number): number {
  return (currentIndex + 1) % length;
}

export function getSequentialPrevious(length: number, currentIndex: number): number {
  return (currentIndex - 1 + length) % length;
}

export function nextRandom(length: number, currentIndex: number, state: RandomSessionState): RandomSessionState {
  if (state.cursor < state.order.length - 1) {
    return {
      ...state,
      cursor: state.cursor + 1,
    };
  }

  const queue = [...state.queue];

  if (queue.length === 0) {
    queue.push(...buildQueue(length, currentIndex));
  }

  const nextIndex = queue.shift();

  if (typeof nextIndex !== "number") {
    return state;
  }

  return {
    order: [...state.order, nextIndex],
    cursor: state.cursor + 1,
    queue,
  };
}

export function previousRandom(state: RandomSessionState): RandomSessionState {
  return {
    ...state,
    cursor: Math.max(0, state.cursor - 1),
  };
}

export function getCurrentIndex(mode: LearningMode, sequentialIndex: number, randomState: RandomSessionState): number {
  return mode === "sequential" ? sequentialIndex : randomState.order[randomState.cursor] ?? 0;
}
