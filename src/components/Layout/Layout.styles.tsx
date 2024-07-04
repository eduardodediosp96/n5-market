// @Theme
import styled from "@emotion/styled";
import { Breakpoint } from "@theme/Theme.types";

export const MainLayout = styled("div")`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.palette.background()};
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

export const MainContainer = styled("div")`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.spacing(2)};

  ${(props) =>
    props.theme.breakpoints.between(Breakpoint.tablet, Breakpoint.laptopS)} {
    padding: ${(props) => `0 ${props.theme.spacing(4)}`};
  }

  ${(props) =>
    props.theme.breakpoints.between(Breakpoint.mobileL, Breakpoint.tablet)} {
    padding: ${(props) => `0 ${props.theme.spacing(4)}`};
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    max-width: 100%;
  }
`;

export const MainBody = styled("div")`
  min-height: ${(props) => `calc(100vh - ${props.theme.sizing.navbar})`};
  padding: ${(props) => props.theme.spacing(2)} 0;
`;
