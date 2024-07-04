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
