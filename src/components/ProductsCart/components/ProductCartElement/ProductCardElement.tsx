// @Components
import Typography from "@commonComponents/Typography/Typography";
import NumericInput from "@commonComponents/Inputs/NumericInput/Numericinput";
import SVGIcon from "@commonComponents/SvgIcon/SvgIcon";
import Button, { ButtonType } from "@commonComponents/Button/Button";

// @Styles
import {
  ProductCartElementContent,
  ProductCartElementImage,
  ProductCartElementSeparator,
  ProductCartElementWrapper,
  ProductCartQuantityAndRemove,
  ProductCartStockAndPrice,
  ProductCartTitleAndTotalPrice,
} from "./ProductCardElement.style";

// @Icons
import { TrashBinIcon } from "@icons";

// @Store
import useStore from "@store/useStore";

// @Types
import { type CartProduct } from "@store/cart/cartSlice";

const ProductCardElement = ({
  cartProduct,
  isLast = false,
}: {
  cartProduct: CartProduct;
  isLast: boolean;
}) => {
  const { product, quantity, total } = cartProduct;
  const { updateProductQuantity, removeProductFromCart } = useStore(
    (state) => ({
      updateProductQuantity: state.updateProductQuantity,
      removeProductFromCart: state.removeFromCart,
    })
  );
  return (
    <>
      <ProductCartElementWrapper>
        <ProductCartElementImage src={product.image} alt={product.name} />
        <ProductCartElementContent>
          <ProductCartTitleAndTotalPrice>
            <Typography variant="cartTitle">{product.name}</Typography>
            <Typography variant="cartTitle">${total}</Typography>
          </ProductCartTitleAndTotalPrice>
          <ProductCartStockAndPrice>
            <Typography variant="cartPrice">${product.price}</Typography>
            <Typography
              margin="0 1 1 1"
              variant="cartSmallTypo"
              color={product.inStock ? "success" : "error"}
            >
              {product.inStock
                ? `Only ${product.stock} left in stock`
                : "Out of stock"}
            </Typography>
          </ProductCartStockAndPrice>
          <ProductCartQuantityAndRemove>
            <NumericInput
              value={quantity}
              min={0}
              max={product.stock}
              onValueChange={(value) =>
                updateProductQuantity(product.id, value)
              }
            />
            <Button
              buttonType={ButtonType.TERTIARY}
              onClick={() => removeProductFromCart(product.id)}
            >
              <SVGIcon icon={TrashBinIcon} size="0.75rem" />
              <Typography variant="cartSmallTypo">Remove from cart</Typography>
            </Button>
          </ProductCartQuantityAndRemove>
        </ProductCartElementContent>
      </ProductCartElementWrapper>
      {!isLast && <ProductCartElementSeparator />}
    </>
  );
};

export default ProductCardElement;
