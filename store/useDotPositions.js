import create from "zustand";

const useDotPositions = create((set) => ({
  leftDotPosition: { x: 0, y: 0 },
  rightDotPosition: { x: 0, y: 0 },
  setDotPositions: (leftDotPosition, rightDotPosition) =>
    set({ leftDotPosition, rightDotPosition }),
}));

export default useDotPositions;