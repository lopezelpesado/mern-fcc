import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  serProducts: (products) => set({ products }),
}));
