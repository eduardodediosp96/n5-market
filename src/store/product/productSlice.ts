// @Types
import { type ImmerStateCreator } from "../types";
import { type Product } from "@services/products.types";

// @Services
import { getProducts } from "@services/products";

export interface ProductSlice {
  products: Product[];
  loading: boolean;
  getProducts: (page: number, limit: number) => Promise<void>;
}

export const createProductSlice: ImmerStateCreator<ProductSlice> = (
  set,
  get
) => ({
  products: [],
  loading: false,
  getProducts: async (page: number, limit: number) => {
    set({ loading: true }, false, "PRODUCTS_FETCH_START");
    try {
      const incomingProducts = await getProducts(page, limit);
      set(
        {
          products: [...get().products, ...incomingProducts],
          loading: false,
        },
        false,
        "PRODUCTS_FETCH_SUCCESS"
      );
    } catch (error) {
      set({ loading: false }, false, "PRODUCTS_FETCH_FAILURE");
    }
  },
});
