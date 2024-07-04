// @Types
import { type ImmerStateCreator } from "../types";
import { type Product } from "@services/products.types";

// @Services
import { getProducts } from "@services/products";

export interface ProductSlice {
  products: Product[];
  isFetchingProducts: boolean;
  allProductsFetched: boolean;
  page: number;
  limit: number;
  getProducts: () => Promise<void>;
  reduceProductStock: (productId: string, quantity: number) => void;
}

export const createProductSlice: ImmerStateCreator<ProductSlice> = (
  set,
  get
) => ({
  products: [],
  page: 1,
  limit: 12,
  isFetchingProducts: false,
  allProductsFetched: false,
  getProducts: async () => {
    set({ isFetchingProducts: true }, false, "PRODUCTS_FETCH_START");
    try {
      const { page, limit } = get();
      const incomingProducts = await getProducts(page, limit);
      const allProductsFetched = incomingProducts.length < limit;
      set(
        {
          products: [...get().products, ...incomingProducts],
          page: page + 1,
          isFetchingProducts: false,
          allProductsFetched,
        },
        false,
        "PRODUCTS_FETCH_SUCCESS"
      );
    } catch (error) {
      set({ isFetchingProducts: false }, false, "PRODUCTS_FETCH_FAILURE");
    }
  },
  reduceProductStock: (productId: string, quantity: number) => {
    set((state) => {
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (product) {
        product.stock -= quantity;
        if (product.stock <= 0) {
          product.inStock = false;
        }
      }
    });
  },
});
