import { Box, Link } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";

import logo from "../../assets/logo/logo.png";
import logoLight from "../../assets/logo/logo_light.png";
import logoIcon from "../../assets/logo/logo_icon.png";
import { styles } from "./style";

const Logo = ({ lightTheme }) => {
  return (
    <Link href={"/"} underline="none">
      <Box sx={styles.logoContainer}>
        <Box component="div" sx={styles.logo}>
          {lightTheme ? (
            <Image src={logoLight} alt={"logo"} />
          ) : (
            <Image src={logo} alt={"logo"} />
          )}
        </Box>

        {/* <Box component="div" sx={styles.logoIcon}>
          <Image src={logoIcon} alt={"logo"} />
        </Box> */}
      </Box>
    </Link>
  );
};

export default Logo;
