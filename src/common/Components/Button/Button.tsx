// @Styles
import { StyledButton } from "./Button.styles";

export enum ButtonSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
}

interface ButtonProps {
  children: React.ReactNode;
  buttonType?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button = ({
  children,
  buttonType = ButtonType.PRIMARY,
  size = ButtonSize.MEDIUM,
  disabled = false,
  onClick = () => {},
  fullWidth = false,
}: ButtonProps) => {
  return (
    <StyledButton
      buttonType={buttonType}
      buttonSize={size}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
