// @Types
import { type Product } from "@services/products.types";
import { type ImmerStateCreator } from "../types";

interface CartProduct {
  product: Product;
  quantity: number;
  total: number;
}

export interface Cart {
  products: CartProduct[];
  total: number;
}

export interface CartSlice {
  cart: Cart;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
  getCartElementsNumber: () => number;
}

export const createCartSlice: ImmerStateCreator<CartSlice> = (set, get) => ({
  cart: { products: [], total: 0 },
  addToCart: (product, quantity) => {
    set(
      (state) => {
        state.cart.products.push({
          product,
          quantity,
          total: product.price * quantity,
        });
      },
      false,
      "PRODUCT_ADDED_TO_CART"
    );
  },
  removeFromCart: (productId) => {
    set(
      (state) => {
        state.cart.products = state.cart.products.filter(
          (p) => p.product.id !== productId
        );
      },
      false,
      "PRODUCT_REMOVED_FROM_CART"
    );
  },
  clearCart: () => {
    set(
      (state) => {
        state.cart.products = [];
        state.cart.total = 0;
      },
      false,
      "CART_CLEARED"
    );
  },
  getTotal: () => {
    return get().cart.products.reduce((acc, curr) => acc + curr.total, 0);
  },
  getCartElementsNumber: () => {
    return get().cart.products.length;
  },
});
