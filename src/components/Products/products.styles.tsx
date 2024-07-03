// @Styles
import styled from "@emotion/styled";
import { Breakpoint } from "@theme/Theme.types";

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: ${(props) => props.theme.spacing(2)};

  ${(props) => props.theme.breakpoints.down(Breakpoint.laptopS)} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductsDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
