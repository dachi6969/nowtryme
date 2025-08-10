import { create } from "zustand";

type useTheme = {
    themeOn: boolean;
    lightOn: () => void;
    lightOff: () => void;
}

export const useTheme = create<useTheme>((set) => ({
    themeOn: false,
    lightOff: () => {
        document.documentElement.className = 'dark';
        set({ themeOn: false })
    },
    lightOn: () => {
        document.documentElement.className = 'light';
        set({ themeOn: true })
    },
}))
