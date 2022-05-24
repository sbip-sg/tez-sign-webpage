import { AppBar, Toolbar } from "@mui/material";
import * as React from "react";

import Logo from "../../../components/Logo";
import NavList from "../NavList";
import NavMenu from "../NavMenu";

import { styles } from "./style";

const Nav = () => {
  return (
    <AppBar elevation={0} position="sticky" sx={styles.nav}>
      <Toolbar sx={styles.toolbar}>
        <Logo />

        <NavList />

        <NavMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
