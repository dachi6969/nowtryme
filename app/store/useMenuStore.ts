import {create} from "zustand";

type UseModal = {
    aboutState: boolean;
    mobileMenu: boolean;
    closeMobileM: () => void;
    openMobileM: () => void;
    openAbout: () => void;
    closeAbout: () => void;
}

export const useModal = create<UseModal>((set) => ({
    aboutState: false,
    mobileMenu: false,
    closeMobileM: () => set({mobileMenu: false}),
    openMobileM: () => set({mobileMenu: true}),
    openAbout: () => set({aboutState: true}),
    closeAbout: () => set({aboutState: false}),
}))