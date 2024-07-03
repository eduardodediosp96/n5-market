// @Icons
import { MoonIcon, SunIcon } from "@icons";

// @Styles
import { PortfolioNavbar, NavbarSection } from "./Navbar.styles";
import NavbarLogo from "./components/NavbarLogo";
import CartButton from "./components/CartButton";

// @Types
import { ColorMode } from "@store/layout/layout-slice";

type NavbarProps = {
  colorMode: ColorMode;
  changeColorMode: () => void;
};

const Navbar = ({ colorMode, changeColorMode }: NavbarProps) => {
  return (
    <PortfolioNavbar>
      <NavbarLogo colorMode={colorMode} />
      <NavbarSection>
        <div onClick={changeColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </div>
        <CartButton />
      </NavbarSection>
    </PortfolioNavbar>
  );
};

export default Navbar;
