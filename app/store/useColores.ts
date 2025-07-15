import { create } from "zustand";

type UseColored = {
  scrolled: boolean;
  setScrolledTrue: () => void;
  setScrolledFalse: () => void;
};

export const useColored = create<UseColored>((set) => ({
  scrolled: false,
  setScrolledTrue: () => set({ scrolled: true }),
  setScrolledFalse: () => set({ scrolled: false }),
}));
