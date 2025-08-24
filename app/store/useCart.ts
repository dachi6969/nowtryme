import { create } from "zustand";

type CartItem = {
  title: string;
  img: string;
  price: string;
  category?: string;
};

type UseCart = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void; 
  clearCart: () => void;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

export const useCart = create<UseCart>((set) => ({
  cartItems: [],
  cartOpen: false,
  openCart: () => set({cartOpen: true}),
  closeCart: () => set({cartOpen: false}),
  addToCart: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
  removeFromCart: (index) =>
    set((state) => ({
      cartItems: state.cartItems.filter((_, i) => i !== index),
    })),
  clearCart: () => set({ cartItems: [] }),
}));
