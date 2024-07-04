import styled from "@emotion/styled";

// @Types
import { Breakpoint } from "@theme/Theme.types";

export const StyledCard = styled.div<{
  noPadding?: boolean;
}>`
  position: relative;
  background: ${(props) => props.theme.palette.cardBackground()};
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: ${({ noPadding, theme }) =>
    noPadding ? "0" : `${theme.spacing(2)}`};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.black("200")};
  border-radius: 15px;
  width: 100%;

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    padding: ${({ noPadding, theme }) =>
      !noPadding && `${theme.spacing(1)} ${theme.spacing(1.5)}`};
  }
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(1)} 0;
  gap: ${({ theme }) => theme.spacing(1)};
  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.black("100")};
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)} 0 0 0;
  gap: ${({ theme }) => theme.spacing(1)};
`;
