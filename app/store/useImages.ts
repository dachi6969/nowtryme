// import {create} from "zustand";

// type ImgStore = {
//     contentImg: string;
//     currentImg: number;
//     setImg: () => void;
//     rightArrow: () => void;
//     leftArrow: () => void;
// }

// export const useImageStore = create<ImgStore>((set,get) => ({
//     contentImg: "",
//     currentImg: 1,
//     setImg: () => {
//         if (typeof window !== "undefined") {
//             const img = window.innerWidth > 480
//               ? "url('/tryme.jpg')"
//               : "url('/mobiled.jpg')";
//             set({ contentImg: img });
//         }
//     },
//     rightArrow: () => {
//         const current = get().currentImg;
//         if (current === 3) return
//         else {
//             set({currentImg: current + 1})
//         }
//     },
//     leftArrow: () => {
//         const current = get().currentImg;
//         if (current === 1) return;
//         else {
//             set({currentImg: current - 1})
//         }
//     },

// }))

