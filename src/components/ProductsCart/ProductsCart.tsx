// @Components
import Card, { CardBody, CardHeader } from "@commonComponents/Card/Card";
import Typography from "@commonComponents/Typography/Typography";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import ProductCardElement from "./components/ProductCartElement/ProductCardElement";
import Button, {
  ButtonSize,
  ButtonType,
} from "@commonComponents/Button/Button";
import SVGIcon from "@commonComponents/SvgIcon/SvgIcon";

// @Styles
import {
  ProductCartContainer,
  ProductCartHeaderWrapper,
  ProductCartWrapper,
} from "./ProductCart.styles";

// @Store
import useStore from "@store/useStore";

// @Icons
import { TrashBinIcon } from "@icons";

const ProductsCart = () => {
  const { cartProducts, clearCart } = useStore((state) => ({
    cartProducts: state.cartProducts,
    clearCart: state.clearCart,
  }));
  return (
    <ProductCartWrapper>
      <Card>
        <CardHeader>
          <ProductCartHeaderWrapper>
            <Typography variant="title">Cart</Typography>
            <Button
              buttonType={ButtonType.TERTIARY}
              onClick={clearCart}
              size={ButtonSize.SMALL}
            >
              <SVGIcon icon={TrashBinIcon} size="1rem" />
              <Typography variant="subtitle">Empty cart</Typography>
            </Button>
          </ProductCartHeaderWrapper>
        </CardHeader>
        <CardBody>
          {cartProducts.length === 0 && (
            <Typography variant="subtitle">
              There's no products in your cart yet.
            </Typography>
          )}
          <ProductCartContainer>
            {cartProducts.map((cartProduct, index) => (
              <ProductCardElement
                key={cartProduct.product.id}
                cartProduct={cartProduct}
                isLast={index === cartProducts.length - 1}
              />
            ))}
          </ProductCartContainer>
        </CardBody>
      </Card>
      <CheckoutForm />
    </ProductCartWrapper>
  );
};

export default ProductsCart;
