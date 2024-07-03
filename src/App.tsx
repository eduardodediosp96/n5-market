import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// @Components
import Layout from "@components/Layout/Layout";
import Products from "@components/Products/Products";
import ProductsCart from "@components/ProductsCart/ProductsCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/products-cart",
        element: <ProductsCart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
