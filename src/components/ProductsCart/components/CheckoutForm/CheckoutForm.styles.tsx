import styled from "@emotion/styled";
import Card from "@commonComponents/Card/Card";
import { Breakpoint } from "@theme/Theme.types";

export const CheckoutFormWrapper = styled(Card)`
  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    border: none;
    padding: ${(props) => props.theme.spacing(2)};
    position: absolute;
    border-radius: 0;
    width: 100%;
    bottom: 0;
    right: 0;
  }
`;

export const SubTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(0.75)};
`;
