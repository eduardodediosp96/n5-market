import { SerializedStyles } from "@emotion/react";

export interface Color {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
  contrast: string;
}

export interface ColorFunction {
  (type?: keyof Color): string;
}

export type FontStyles = {
  [key: string]: SerializedStyles;
};

export type PaletteType = {
  background: ColorFunction;
  primary: ColorFunction;
  success: ColorFunction;
  error: ColorFunction;
  cardBackground: ColorFunction;
  text: ColorFunction;
  black: ColorFunction;
  white: ColorFunction;
};

export type SizingType = {
  navbar: string;
  navbarMobile: string;
  footer: string;
  footerMobile: string;
};

export type TypographyType = {
  [key: string]: {
    fontSize: string;
    fontWeight?: number;
  };
};

export type SpacingType = (value: number) => string;

export enum Breakpoint {
  mobileS = "mobileS",
  mobileM = "mobileM",
  mobileL = "mobileL",
  tabletS = "tabletS",
  tablet = "tablet",
  laptopS = "laptopS",
  laptopXL = "laptopXL",
}

export type BreakpointsType = {
  values: Record<Breakpoint, number>;
  up: (breakpoint: Breakpoint) => string;
  down: (breakpoint: Breakpoint) => string;
  between: (start: Breakpoint, end: Breakpoint) => string;
};

export type AnimationsType = {
  enterCards: string;
  hoverCard: string;
};

export type ThemeType = {
  animations: AnimationsType;
  breakpoints: BreakpointsType;
  colorMode: "dark" | "light";
  palette: PaletteType;
  typography: TypographyType;
  sizing: SizingType;
  spacing: SpacingType;
};
