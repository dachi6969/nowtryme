import {create} from "zustand";

type ImgStore = {
    contentImg: string;
    firstImg: () => void;
    secondImg: () => void;
    thirdImg: () => void;
}

export const useImageStore = create<ImgStore>((set) => ({
    contentImg: "url('/first.jpg')",
    firstImg: () => set({contentImg: "url('/first.jpg')"}),
    secondImg: () => set({contentImg: "url('/second.jpg')"}),
    thirdImg: () => set({contentImg: "url('/third.jpg')"}),
}))