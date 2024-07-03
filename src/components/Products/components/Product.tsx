// @React-Hooks
import { useState } from "react";

// @Styles
import {
  ProductContent,
  ProductImage,
  ProductInfo,
  ProductCart,
} from "./Product.styles";

// @Components
import NumericInput from "@commonComponents/Inputs/NumericInput/Numericinput";
import Button, { ButtonType } from "@commonComponents/Button/Button";
import Typography from "@commonComponents/Typography/Typography";

// @Icons
import SVGIcon, { PlusIcon, TrashBinIcon } from "@icons";

// @Types
import { type Product } from "@services/products.types";

// @Store
import useStore from "@store/useStore";

interface ProductProps {
  product: Product;
}

const Product = ({ product }: ProductProps) => {
  const [quantity, setQuantity] = useState(0);
  const { cart, addToCart, removeFromCart } = useStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
  }));
  const isInCart = cart.products.some((p) => p.product.id === product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(0);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setQuantity(0);
  };

  return (
    <ProductCart>
      <ProductImage src={product.image} disabled={!product.inStock} />
      <ProductContent>
        <ProductInfo>
          <Typography variant="cartTitle">{product.name}</Typography>
          <Typography variant="cartPrice">${product.price}</Typography>
        </ProductInfo>
        <Typography
          margin="0 1 1 1"
          variant="cartSmallTypo"
          color={product.inStock ? "success" : "error"}
        >
          {product.inStock ? "In stock" : "Out of stock"}
        </Typography>
        <ProductInfo>
          {!isInCart ? (
            <NumericInput
              value={quantity}
              onValueChange={setQuantity}
              disabled={!product.inStock}
            />
          ) : null}
          {!isInCart ? (
            <Button
              buttonType={ButtonType.TERTIARY}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <SVGIcon icon={PlusIcon} size="0.75rem" />
              <Typography variant="cartSmallTypo">Add to cart</Typography>
            </Button>
          ) : (
            <Button
              buttonType={ButtonType.TERTIARY}
              onClick={handleRemoveFromCart}
            >
              <SVGIcon icon={TrashBinIcon} size="0.75rem" />
              <Typography variant="cartSmallTypo">Remove from cart</Typography>
            </Button>
          )}
        </ProductInfo>
      </ProductContent>
    </ProductCart>
  );
};

export default Product;
