// @Components
import Typography from "@commonComponents/Typography/Typography";

// @Icons
import { N5Icon, N5WhiteIcon } from "@icons";

// @Styles
import { LogoWrapper } from "./NavbarLogo.styles";

const NavbarLogo = ({ colorMode }: { colorMode: "light" | "dark" }) => {
  return (
    <LogoWrapper>
      {colorMode === "dark" ? <N5WhiteIcon /> : <N5Icon />}
      <Typography variant="title" margin="0 0 0.5 0">
        Market
      </Typography>
    </LogoWrapper>
  );
};

export default NavbarLogo;
