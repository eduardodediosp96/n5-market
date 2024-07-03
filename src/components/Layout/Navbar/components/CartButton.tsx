// @Components
import Typography from "@commonComponents/Typography/Typography";

// @Icons
import SVGIcon, { MarketCartIcon } from "@icons";

// @Styles
import { MarketButton, MarketButtonText } from "./CartButton.styles";

// @Store
import useStore from "@store/useStore";

const CartButton = () => {
  const { getCartElementsNumber } = useStore((state) => ({
    getCartElementsNumber: state.getCartElementsNumber,
  }));

  return (
    <MarketButton>
      <SVGIcon icon={MarketCartIcon} stroke="text" />
      <MarketButtonText>
        <Typography variant="cartItemsQuantityText">
          {getCartElementsNumber()}
        </Typography>
      </MarketButtonText>
    </MarketButton>
  );
};

export default CartButton;
