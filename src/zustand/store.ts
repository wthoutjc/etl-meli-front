import { create } from "zustand";

// Slices & Initial states
import { UISlice, ProductsSlice } from "@/libs";

// Interfaces
import { UIState, ProductDetails, DrawerState, Alert } from "@/interfaces";

const uiInitialState: UIState = {
  drawer: {
    open: false,
  },
  alerts: [],
};

export const useUIStore = create<UISlice>((set) => ({
  ...uiInitialState,
  setDrawer: (drawer: DrawerState) => set({ drawer }),
  setAlerts: (alerts: Alert[]) => set({ alerts }),
}));

export const useProductsStore = create<ProductsSlice>()((set) => ({
  products: [],
  addProducts: (products: ProductDetails[][]) =>
    set({
      products,
    }),
}));
