// @Components
import Typography from "@commonComponents/Typography/Typography";
import SVGIcon from "@commonComponents/SvgIcon/SvgIcon";

// @Icons
import { MarketCartIcon } from "@icons";

// @Styles
import { MarketButton, MarketButtonText } from "./CartButton.styles";

// @Store
import useStore from "@store/useStore";

// @Router
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  const navigate = useNavigate();
  const { getCartElementsNumber } = useStore((state) => ({
    getCartElementsNumber: state.getCartElementsNumber,
  }));

  return (
    <MarketButton
      onClick={() => {
        navigate("/products-cart");
      }}
    >
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
