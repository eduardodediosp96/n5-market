// @Styles
import { StyledButton } from "./Button.styles";

export enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
}

interface ButtonProps {
  children: React.ReactNode;
  buttonType: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  buttonType,
  disabled = false,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <StyledButton buttonType={buttonType} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
