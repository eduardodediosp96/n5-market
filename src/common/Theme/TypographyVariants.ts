// @Theme
import { palette } from "./Palette";

const fontSizes = {
  xsmall: "0.75rem", //12
  small: "0.875rem", // 14
  medium: "1rem", // 16
  standard: "1.063rem", // 17
  large: "1.125rem", // 18
  xlarge: "1.25rem", // 20
  xxlarge: "1.5rem", // 24
  xxxlarge: "1.75rem",
};

export const getTypography = (themeColor: "light" | "dark") => ({
  title: {
    fontSize: fontSizes.xlarge,
    fontWeight: 700,
    color: palette[themeColor].text(),
  },
  subtitle: {
    fontSize: fontSizes.medium,
    fontWeight: 500,
    color:
      themeColor === "light"
        ? palette[themeColor].text("900")
        : palette[themeColor].text(),
  },
  //Cart
  cartTitle: {
    fontSize: fontSizes.medium,
    fontWeight: 700,
    color:
      themeColor === "light"
        ? palette[themeColor].text("900")
        : palette[themeColor].text(),
  },
  cartPrice: {
    fontSize: fontSizes.medium,
    fontWeight: 700,
    color: palette[themeColor].text("900"),
  },
  cartSmallTypo: {
    fontSize: fontSizes.xsmall,
    fontWeight: 500,
    color: palette[themeColor].text(),
  },
  cartItemsQuantityText: {
    fontSize: fontSizes.xsmall,
    fontWeight: 700,
    color: palette[themeColor].white(),
  },
  //Button
  primaryButtonText: {
    fontSize: fontSizes.xlarge,
    fontWeight: 700,
    color: palette[themeColor].white(),
  },
  secondaryButtonText: {
    fontSize: fontSizes.xlarge,
    fontWeight: 700,
    color: palette[themeColor].text("800"),
  },
});
