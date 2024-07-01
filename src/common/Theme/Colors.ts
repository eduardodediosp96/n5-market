import { Color, ColorFunction } from "./Theme.types";

export function createColorObject(baseColor: Color): ColorFunction {
  return function (type: keyof Color = "500"): string {
    return baseColor[type];
  };
}

export const lightSilver: Color = {
  50: "#fafafa",
  100: "#f4f4f4",
  200: "#ececec",
  300: "#e4e4e4",
  400: "#dfdfdf",
  500: "#d9d9d9",
  600: "#d5d5d5",
  700: "#cfcfcf",
  800: "#cacaca",
  900: "#c0c0c0",
  A100: "#ffffff",
  A200: "#ffffff",
  A400: "#ffffff",
  A700: "#ffffff",
  contrast: "#000000",
};

export const davysGrey: Color = {
  50: "#ebebeb",
  100: "#cecece",
  200: "#adaeae",
  300: "#8c8d8d",
  400: "#737474",
  500: "#5a5c5c",
  600: "#525454",
  700: "#484a4a",
  800: "#3f4141",
  900: "#2e3030",
  A100: "#8df5f5",
  A200: "#5ff0f0",
  A400: "#1dffff",
  A700: "#03ffff",
  contrast: "#000000",
};

export const arsenic: Color = {
  50: "#e8e8e8",
  100: "#c6c6c6",
  200: "#a0a0a0",
  300: "#7a7a7a",
  400: "#5e5e5e",
  500: "#414141",
  600: "#3b3b3b",
  700: "#323232",
  800: "#2a2a2a",
  900: "#1c1c1c",
  A100: "#f07777",
  A200: "#eb4949",
  A400: "#ff0202",
  A700: "#e70000",
  contrast: "#000000",
};

export const azure: Color = {
  50: "#e0f0ff",
  100: "#b3daff",
  200: "#80c2ff",
  300: "#4daaff",
  400: "#2697ff",
  500: "#0085ff",
  600: "#007dff",
  700: "#0072ff",
  800: "#0068ff",
  900: "#0055ff",
  A100: "#ffffff",
  A200: "#f2f6ff",
  A400: "#bfd1ff",
  A700: "#a6beff",
  contrast: "#000000",
};

export const chineseBlack: Color = {
  50: "#e3e3e3",
  100: "#b9b9b9",
  200: "#8b8b8b",
  300: "#5c5c5c",
  400: "#393939",
  500: "#161616",
  600: "#131313",
  700: "#101010",
  800: "#0c0c0c",
  900: "#060606",
  A100: "#ff4e4e",
  A200: "#ff1b1b",
  A400: "#e70000",
  A700: "#ce0000",
  contrast: "#ffffff",
};

export const antiFlashWhite: Color = {
  50: "#fdfefe",
  100: "#fbfbfb",
  200: "#f8f9f9",
  300: "#f5f7f7",
  400: "#f3f5f5",
  500: "#f1f3f3",
  600: "#eff1f1",
  700: "#edefef",
  800: "#ebeded",
  900: "#e7eaea",
  A100: "#ffffff",
  A200: "#ffffff",
  A400: "#ffffff",
  A700: "#ffffff",
  contrast: "#000000",
};

export const ufoGreen: Color = {
  50: "#e7f9ec",
  100: "#c3efcf",
  200: "#9be4b0",
  300: "#73d990",
  400: "#55d178",
  500: "#37c960",
  600: "#31c358",
  700: "#2ac44e",
  800: "#23b544",
  900: "#16a933",
  A100: "#dcffe2",
  A200: "#a9ffb8",
  A400: "#76ff8d",
  A700: "#5dff78",
  contrast: "#000000",
};

export const carminePink: Color = {
  50: "#fde9e9",
  100: "#f9c8c8",
  200: "#f6a4a4",
  300: "#f28080",
  400: "#ef6464",
  500: "#ec4949",
  600: "#ea4242",
  700: "#e73939",
  800: "#e43131",
  900: "#df2121",
  A100: "#ffffff",
  A200: "#ffe4e4",
  A400: "#ffb1b1",
  A700: "#ff9797",
  contrast: "#000000",
};
