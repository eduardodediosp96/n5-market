// @React-Hooks
import { useEffect, useRef, useState } from "react";

// @Styles
import { ProductsWrapper } from "./products.styles";

// @Types
import Product from "./components/Product";
import Typography from "@commonComponents/Typography/Typography";

// @Store
import useStore from "@store/useStore";

// @Constants
const PAGE_LIMIT = 12;

const Products = () => {
  const [page, setPage] = useState(1);
  const loader = useRef(null);
  const { products, loading, getProducts } = useStore((state) => ({
    products: state.products,
    loading: state.loading,
    getProducts: state.getProducts,
  }));

  useEffect(() => {
    if (loading) return;
    getProducts(page, PAGE_LIMIT);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 1.0,
    });
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  const handleObserver = (entities: any) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <ProductsWrapper>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsWrapper>
      {loading && <Typography variant="subtitle">Loading...</Typography>}
      <div ref={loader} />
    </>
  );
};

export default Products;
