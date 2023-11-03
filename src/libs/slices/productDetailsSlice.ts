import { StateCreator } from "zustand";

// Interfaces
import { ProductDetails, ProductsState } from "@/interfaces";

const productsInitialState: ProductsState = {
  products: [],
};

interface ProductsSlice {
  products: ProductDetails[][];
  addProducts: (products: ProductDetails[][]) => void;
  deleteProduct: (id: string) => void;
}

const createProductsSlice: StateCreator<ProductsState> = (set) => ({
  ...productsInitialState,
  addProducts: (products: ProductDetails[][]) =>
    set({
      products,
    }),
  deleteProduct: (id: string) =>
    set((state) => ({
      products: state.products.filter(
        (product) => product[0].k_products !== id
      ),
    })),
});

export { createProductsSlice };
export type { ProductsSlice };
