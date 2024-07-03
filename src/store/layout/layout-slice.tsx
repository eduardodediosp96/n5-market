// @Types
import { type ImmerStateCreator } from "../types";

export enum ColorMode {
  dark = "dark",
  light = "light",
}

export type LayoutSlice = {
  colorMode: ColorMode;
  changeColorMode: () => void;
};

export const createLayoutSlice: ImmerStateCreator<LayoutSlice> = (
  set,
  get
) => ({
  colorMode: ColorMode.light,
  changeColorMode: () =>
    set(
      {
        colorMode:
          get().colorMode === ColorMode.light
            ? ColorMode.dark
            : ColorMode.light,
      },
      false,
      "COLOR_MODE_CHANGED"
    ),
});
