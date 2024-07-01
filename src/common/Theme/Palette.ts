import {
  antiFlashWhite,
  arsenic,
  azure,
  chineseBlack,
  createColorObject,
  davysGrey,
  lightSilver,
  ufoGreen,
  carminePink,
} from "./Colors";

// @Types
import { PaletteType } from "./Theme.types";

export const palette: Record<"light" | "dark", PaletteType> = {
  dark: {
    background: createColorObject(davysGrey),
    primary: createColorObject(azure),
    success: createColorObject(ufoGreen),
    error: createColorObject(carminePink),
    cardBackground: createColorObject(chineseBlack),
    text: createColorObject(antiFlashWhite),
    black: createColorObject(chineseBlack),
    white: createColorObject(antiFlashWhite),
  },
  light: {
    background: createColorObject(lightSilver),
    primary: createColorObject(azure),
    success: createColorObject(ufoGreen),
    error: createColorObject(carminePink),
    cardBackground: createColorObject(antiFlashWhite),
    text: createColorObject(arsenic),
    black: createColorObject(chineseBlack),
    white: createColorObject(antiFlashWhite),
  },
};
