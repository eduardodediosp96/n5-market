// @React-Hooks
import { useEffect, useRef } from "react";

// @Styles
import { ProductsWrapper } from "./products.styles";

// @Components
import Product from "./components/Product";
import Typography from "@commonComponents/Typography/Typography";

// @Store
import useStore from "@store/useStore";

const Products = () => {
  const initialFetchDone = useRef(false); // Ref to track if initial fetch is done
  const loader = useRef(null);
  const { products, isFetchingProducts, getProducts, allProductsFetched } =
    useStore((state) => ({
      products: state.products,
      isFetchingProducts: state.isFetchingProducts,
      getProducts: state.getProducts,
      allProductsFetched: state.allProductsFetched,
    }));

  // Initial fetch
  useEffect(() => {
    if (!initialFetchDone.current) {
      getProducts();
      initialFetchDone.current = true;
    }
  }, []);

  // IntersectionObserver setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isFetchingProducts) {
          getProducts();
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [isFetchingProducts]);

  return (
    <>
      <ProductsWrapper>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsWrapper>
      {isFetchingProducts ? (
        <Typography variant="subtitle">Loading...</Typography>
      ) : allProductsFetched ? (
        <Typography variant="subtitle">No more products to show</Typography>
      ) : (
        // This div will only render if not loading and not all products fetched
        // This is to bind the observer to the bottom of the page
        <div ref={loader} />
      )}
    </>
  );
};

export default Products;
