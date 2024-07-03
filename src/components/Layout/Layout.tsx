// @Components
import Navbar from "@components/Layout/Navbar/Navbar";

// @Router
import { Outlet } from "react-router";

// @Styles
import {
  MainBody,
  MainContainer,
  MainLayout,
} from "@components/Layout/Layout.styles";

// @Store
import useStore from "@store/useStore";

// @Theme
import getTheme from "@theme/Theme";
import { ThemeProvider } from "@emotion/react";

const Layout = () => {
  // get color mode from store
  const { colorMode, changeColorMode } = useStore((state) => ({
    colorMode: state.colorMode,
    changeColorMode: state.changeColorMode,
  }));

  const theme = getTheme(colorMode);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <MainContainer>
          <Navbar colorMode={colorMode} changeColorMode={changeColorMode} />
          <MainBody>
            <Outlet />
          </MainBody>
        </MainContainer>
      </MainLayout>
    </ThemeProvider>
  );
};

export default Layout;
