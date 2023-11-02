import { StateCreator } from "zustand";

// Interfaces
import { ProductDetails, ProductsState } from "@/interfaces";

const productsInitialState: ProductsState = {
  products: [],
};

interface ProductsSlice {
  products: ProductDetails[][];
  addProducts: (products: ProductDetails[][]) => void;
}

const createProductsSlice: StateCreator<ProductsState> = (set) => ({
  ...productsInitialState,
  addProducts: (products: ProductDetails[][]) =>
    set({
      products,
    }),
});

export { createProductsSlice };
export type { ProductsSlice };
