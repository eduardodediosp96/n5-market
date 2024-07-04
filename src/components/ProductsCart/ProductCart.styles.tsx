import styled from "@emotion/styled";
import { Breakpoint } from "@theme/Theme.types";

export const ProductCartWrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  align-items: start;
  gap: ${({ theme }) => theme.spacing(2)};

  ${(props) => props.theme.breakpoints.down(Breakpoint.laptopS)} {
    grid-template-columns: 1fr 250px;
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ProductCartHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCartContainer = styled.div`
  max-height: 700px;
  overflow-y: auto;

  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    max-height: 550px;
  }
  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    max-height: 480px;
  }
  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileM)} {
    max-height: 310px;
  }
`;
