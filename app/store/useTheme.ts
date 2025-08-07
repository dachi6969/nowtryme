import { create } from "zustand";

type useTheme = {
    themeOn: boolean;
    lightOn: () => void;
    lightOff: () => void;
}

export const useTheme = create<useTheme>((set) => ({
    themeOn: false,
    lightOff: () => set({themeOn: false}),
    lightOn: () => set({themeOn: true}),
}))
