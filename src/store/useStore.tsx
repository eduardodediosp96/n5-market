// @Slices
import { createLayoutSlice } from "./layout/layout-slice";
import { createCartSlice } from "./cart/cartSlice";
import { createProductSlice } from "./product/productSlice";

// @Zustand
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// @Types
import { type MarketStore } from "./types";

const localStorageStorage = createJSONStorage<Partial<MarketStore>>(
  () => localStorage
);

const useStore = create<MarketStore>()(
  devtools(
    persist(
      immer((...a) => ({
        ...createLayoutSlice(...a),
        ...createCartSlice(...a),
        ...createProductSlice(...a),
      })),
      {
        name: "cache",
        storage: localStorageStorage,
        partialize: (state) => {
          // Specify which parts of the state to persist
          const { cartProducts, colorMode } = state;
          return { cartProducts, colorMode };
        },
      }
    ),
    {
      name: "Market Store",
      enabled: true,
    }
  )
);

export default useStore;
