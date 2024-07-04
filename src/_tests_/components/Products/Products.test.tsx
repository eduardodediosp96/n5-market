import { render, waitFor } from "@utils/test-utils";
import Products from "@components/Products/Products";

const mockProducts = [
  {
    id: "id-6t8fr95kznh9wj3b",
    name: "Product 1",
    price: 83,
    inStock: true,
    image:
      "https://upcdn.io/W142ige/raw/CrewNeck5-Pack-03_4c01f3ea-1b48-4362-be1b-ae32485bcc05_540x.webp",
    stock: 23,
  },
  {
    id: "id-tbjmly9whsg4fvnx",
    name: "Product 2",
    price: 95,
    inStock: true,
    image:
      "https://upcdn.io/W142ige/raw/V-Neck5-Pack-05_8451cc95-7118-46bb-accf-5ff053ceb98c_540x.webp",
    stock: 12,
  },
];

jest.mock("@store/useStore", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    products: mockProducts,
    isFetchingProducts: false,
    getProducts: jest.fn(),
    cartProducts: [],
    allProductsFetched: false,
  })),
}));

jest.mock("@icons", () => ({
  MoonIcon: () => <span>MoonIcon</span>,
  SunIcon: () => <span>SunIcon</span>,
  BackArrowIcon: () => <span>BackArrowIcon</span>,
  MarketCartIcon: () => <span>MarketCartIcon</span>,
  PlusIcon: () => <span>PlusIcon</span>,
}));

describe("Products Component", () => {
  test("renders products on initial load", async () => {
    const { container } = render(<Products />);
    await waitFor(() => {
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  test("displays products regarding the store state", async () => {
    const { container } = render(<Products />);
    await waitFor(() => {
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild?.childNodes).toHaveLength(2);
    });
  });
});
