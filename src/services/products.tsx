// @Mock
import { products } from "./mock_products";

// @Types
import { type Product } from "./products.types";

const getProducts = async (page: number, limit: number): Promise<Product[]> => {
  // delay 2 second
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return products.slice((page - 1) * limit, page * limit) || [];
};

export { getProducts };