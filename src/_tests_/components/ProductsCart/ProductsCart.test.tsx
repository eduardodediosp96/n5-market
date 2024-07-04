import { render, waitFor } from "@utils/test-utils";
import ProductsCart from "@components/ProductsCart/ProductsCart";

// Mock data for the cart
const mockCartProducts = [
  {
    product: {
      id: "id-6t8fr95kznh9wj3b",
      name: "Product 1",
      price: 83,
      image: "https://example.com/product1.jpg",
    },
    quantity: 2,
  },
  {
    product: {
      id: "id-tbjmly9whsg4fvnx",
      name: "Product 2",
      price: 95,
      image: "https://example.com/product2.jpg",
    },
    quantity: 1,
  },
];

jest.mock("@store/useStore", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    cartProducts: mockCartProducts,
    clearCart: jest.fn(),
  })),
}));

jest.mock("@icons", () => ({
  TrashBinIcon: () => <span>TrashBinIcon</span>,
}));

describe("ProductsCart Component", () => {
  test.skip("renders non-empty cart correctly", async () => {
    const { getByText, getAllByTestId } = render(<ProductsCart />);
    await waitFor(() => {
      expect(getByText("Cart")).toBeInTheDocument();
      expect(getAllByTestId("product-card-element").length).toBe(
        mockCartProducts.length
      );
    });
  });

  test.skip("renders empty cart message when no products are in the cart", async () => {
    jest.mock("@store/useStore", () => ({
      __esModule: true,
      default: jest.fn(() => ({
        cartProducts: [],
        clearCart: jest.fn(),
      })),
    }));

    const { getByText } = render(<ProductsCart />);
    await waitFor(() => {
      expect(
        getByText("There's no products in your cart yet.")
      ).toBeInTheDocument();
    });
  });
});
