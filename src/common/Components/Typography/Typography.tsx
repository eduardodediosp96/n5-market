import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { PaletteType } from "@theme/Theme.types";

type TypographyProps = {
  color?: keyof PaletteType;
  margin?: string;
  variant: string;
};

const TypographyStyles = ({ color, margin, variant }: TypographyProps) => {
  const theme = useTheme();

  const marginList = margin?.split(" ").reduce((prev, marginValue) => {
    return `${prev} ${theme.spacing(Number(marginValue))}`;
  }, "");

  return {
    margin: margin ? marginList : theme.spacing(0.5),
    ...theme.typography[variant],
    ...(color && { color: theme.palette[color]() }),
  };
};

const Typography = styled("span")(TypographyStyles);

export default Typography;
