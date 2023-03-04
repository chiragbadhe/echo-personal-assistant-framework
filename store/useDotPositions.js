import { create } from "zustand";

const useDotPositions = create((set) => ({
  leftDotPosition: { x: 0, y: 0 },
  rightDotPosition: { x: 0, y: 0 },
  leftLipAngle: 0,

  setDotPositions: (
    { leftDotPosition, rightDotPosition } // use object destructuring to get both positions
  ) =>
    set((state) => ({
      leftDotPosition: { ...state.leftDotPosition, ...leftDotPosition }, // update only leftDotPosition
      rightDotPosition: { ...state.rightDotPosition, ...rightDotPosition }, // update only rightDotPosition
    })),
  setLeftLipAngle: (angle) => set({ leftLipAngle: angle }),
}));

export default useDotPositions;
