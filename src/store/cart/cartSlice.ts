// @Types
import { type Product } from "@services/products.types";
import { type ImmerStateCreator } from "../types";
import { submitCheckout } from "@services/cartProducts";

export interface CartProduct {
  product: Product;
  quantity: number;
  total: number;
}

export interface CartSlice {
  cartProducts: CartProduct[];
  isSubmitting: boolean;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getCartElementsNumber: () => number;
  submitCheckout: () => void;
}

export const createCartSlice: ImmerStateCreator<CartSlice> = (set, get) => ({
  cartProducts: [],
  isSubmitting: false,
  addToCart: (product, quantity) => {
    set(
      (state) => {
        state.cartProducts.push({
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
        state.cartProducts = state.cartProducts.filter(
          (p) => p.product.id !== productId
        );
      },
      false,
      "PRODUCT_REMOVED_FROM_CART"
    );
  },
  updateProductQuantity: (productId, quantity) => {
    set(
      (state) => {
        const product = state.cartProducts.find(
          (p) => p.product.id === productId
        );
        if (product) {
          product.quantity = quantity;
          product.total = product.product.price * quantity;
        }
      },
      false,
      "PRODUCT_QUANTITY_UPDATED"
    );
  },
  clearCart: () => {
    set(
      (state) => {
        state.cartProducts = [];
      },
      false,
      "CART_CLEARED"
    );
  },
  submitCheckout: async () => {
    set(
      (state) => {
        state.isSubmitting = true;
      },
      false,
      "CHECKOUT_SUBMITTING_STARTED"
    );

    try {
      await submitCheckout();
      const { cartProducts, reduceProductStock: updateProductStock } = get();
      cartProducts.forEach((cartProduct: CartProduct) => {
        updateProductStock(cartProduct.product.id, cartProduct.quantity);
      });
      set(
        (state) => {
          state.cartProducts = [];
          state.isSubmitting = false;
        },
        false,
        "CHECKOUT_SUBMITTED"
      );
    } catch (error) {
      set(
        (state) => {
          state.isSubmitting = false;
        },
        false,
        "CHECKOUT_SUBMITTING_ERROR"
      );
    }
  },
  getTotal: () => {
    return get().cartProducts.reduce((acc, curr) => acc + curr.total, 0) || 0;
  },
  getCartElementsNumber: () => {
    return get().cartProducts.length || 0;
  },
});
