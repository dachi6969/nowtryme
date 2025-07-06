import {create} from "zustand";

type UseModal = {
    aboutState: boolean;
    openAbout: () => void;
    closeAbout: () => void;
}

export const useModal = create<UseModal>((set) => ({
    aboutState: false,
    openAbout: () => set({aboutState: true}),
    closeAbout: () => set({aboutState: false}),
}))