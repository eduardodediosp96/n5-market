export { default as MoonIcon } from "./moon-icon.svg?react";
export { default as SunIcon } from "./sun-icon.svg?react";
export { default as BackArrowIcon } from "./back-arrow.svg?react";
export { default as MarketCartIcon } from "./market-cart.svg?react";
export { default as TrashBinIcon } from "./trash-bin.svg?react";
export { default as N5Icon } from "./n5-icon.svg?react";
export { default as N5WhiteIcon } from "./n5-white-icon.svg?react";
export { default as PlusIcon } from "./plus.svg?react";

import styled from "@emotion/styled";
import { PaletteType } from "@theme/Theme.types";

const SVGIconWrapper = styled.div<{
  fill?: keyof PaletteType;
  size?: string;
  stroke?: keyof PaletteType;
}>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};

  svg {
    * {
      fill: ${({ fill, theme }) => fill && theme.palette[fill]()};
      stroke: ${({ stroke, theme }) => stroke && theme.palette[stroke]()};
    }
  }
`;

type SVGIconProps = {
  icon: React.FunctionComponent;
  size?: string;
  fill?: keyof PaletteType;
  stroke?: keyof PaletteType;
};

const SVGIcon: React.FC<SVGIconProps> = ({ icon: Icon, ...rest }) => {
  return (
    <SVGIconWrapper {...rest}>
      <Icon />
    </SVGIconWrapper>
  );
};

export default SVGIcon;
