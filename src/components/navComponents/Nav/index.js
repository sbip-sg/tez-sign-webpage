import { AppBar, Toolbar, Typography } from "@mui/material";
import * as React from "react";

import Logo from "../../../components/Logo";
import NavList from "../NavList";
// import NavMenu from "../../containers/NavMenu";

import { styles } from "./style";

const Nav = () => {
  const handleScrollIntoView = (section) => () => {
    if (typeof window !== "undefined") {
      document.querySelector(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <AppBar elevation={0} position="static" sx={styles.nav}>
      <Toolbar sx={styles.toolbar}>
        <Logo />

        <NavList scrollIntoView={handleScrollIntoView} />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
