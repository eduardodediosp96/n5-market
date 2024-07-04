// @Styles
import styled from "@emotion/styled";

// @Types
import { ThemeType } from "@theme/Theme.types";
import { ButtonSize, ButtonType } from "./Button";

const buttonSizeStyles = (theme: ThemeType) => ({
  [ButtonSize.SMALL]: {
    padding: theme.spacing(0.5),
  },
  [ButtonSize.MEDIUM]: {
    padding: theme.spacing(1),
  },
  [ButtonSize.LARGE]: {
    padding: theme.spacing(1.5),
  },
});

const buttonTypeStyles = (theme: ThemeType) => ({
  [ButtonType.PRIMARY]: {
    backgroundColor: theme.palette.primary(),
    color: theme.palette.white(),
    borderColor: theme.palette.primary(),
  },
  [ButtonType.SECONDARY]: {
    backgroundColor: "transparent",
    color: theme.palette.text(),
    borderColor: theme.palette.text(),
  },
  [ButtonType.TERTIARY]: {
    backgroundColor: "transparent",
    color: theme.palette.text(),
    borderColor: "transparent",
  },
});

export const StyledButton = styled.button<{
  fullWidth?: boolean;
  buttonType: ButtonType;
  buttonSize: ButtonSize;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: ${({ theme, buttonSize }) =>
    buttonSizeStyles(theme)[buttonSize].padding};
  ${({ theme, buttonType, disabled }) => {
    const { backgroundColor, color, borderColor } =
      buttonTypeStyles(theme)[buttonType];
    return `
    background-color: ${backgroundColor};
    color: ${color};
    opacity: ${disabled ? 0.5 : 1};
    border: 1px solid ${borderColor};

    span {
      color: ${color};
    }

    svg {
      fill: ${color};
      stroke: ${color};
    }
    `;
  }}
`;
