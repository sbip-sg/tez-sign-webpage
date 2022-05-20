import { AppBar, Toolbar, Typography } from "@mui/material";
import * as React from "react";

import Logo from "../../../components/Logo";
import NavList from "../NavList";
// import NavMenu from "../../containers/NavMenu";

import { styles } from "./style";

const Nav = () => {
  return (
    <AppBar elevation={0} position="static" sx={styles.nav}>
      <Toolbar sx={styles.toolbar}>
        <Logo />

        <NavList />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
