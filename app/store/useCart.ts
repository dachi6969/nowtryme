
"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Item = {
  img: string;
  price: string;
  title: string;
};

type CartState = {
  cartItems: Item[];
  cartOpen: boolean;
  addToCart: (item: Item) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      cartOpen: false,

      addToCart: (item) =>
        set((state) => ({ cartItems: [...state.cartItems, item] })),

      removeFromCart: (index) =>
        set((state) => ({
          cartItems: state.cartItems.filter((_, i) => i !== index),
        })),

      clearCart: () => set({ cartItems: [] }),

      openCart: () => set({ cartOpen: true }),
      closeCart: () => set({ cartOpen: false }),
    }),
    {
      name: "cart-storage", 
    }
  )
);
