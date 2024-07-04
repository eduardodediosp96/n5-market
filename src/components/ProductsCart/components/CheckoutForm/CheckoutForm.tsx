// @Components
import Typography from "@commonComponents/Typography/Typography";

// @Styles
import {
  CheckoutButtonsWrapper,
  CheckoutFormWrapper,
  SubTotalWrapper,
} from "./CheckoutForm.styles";

// @Store
import useStore from "@store/useStore";
import Button, { ButtonType } from "@commonComponents/Button/Button";

// @Router
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { submitCheckout, getTotal, isSubmitting } = useStore((state) => ({
    submitCheckout: state.submitCheckout,
    getTotal: state.getTotal,
    isSubmitting: state.isSubmitting,
  }));

  return (
    <CheckoutFormWrapper>
      <SubTotalWrapper>
        <Typography variant="cartTitle">Subtotal</Typography>
        <Typography variant="cartPrice">${getTotal()}</Typography>
      </SubTotalWrapper>
      <CheckoutButtonsWrapper>
        <Button
          onClick={submitCheckout}
          disabled={isSubmitting || !getTotal()}
          fullWidth
        >
          <Typography variant="primaryButtonText">
            {isSubmitting ? "Submitting..." : "Checkout"}
          </Typography>
        </Button>
        <Button
          buttonType={ButtonType.SECONDARY}
          onClick={() => navigate("/")}
          fullWidth
        >
          <Typography variant="secondaryButtonText">
            Continue Shopping
          </Typography>
        </Button>
      </CheckoutButtonsWrapper>
    </CheckoutFormWrapper>
  );
};

export default CheckoutForm;
