import { Box, Link, Typography } from "@mui/material";
import React from "react";

import { NAV_ROUTES } from "../../../utils/routes";
import { styles } from "./style";

const NavList = ({ scrollIntoView }) => {
  return (
    <Box sx={styles.navListContainer}>
      {Array.from(NAV_ROUTES.keys()).map((key) => (
        // <Link href={NAV_ROUTES.get(key).PATH} key={key} underline="none">
        <Typography
          key={key}
          sx={styles.navText}
          onClick={scrollIntoView(`#${NAV_ROUTES.get(key).ID}`)}
        >
          {NAV_ROUTES.get(key).LABEL}
        </Typography>
        // </Link>
      ))}
    </Box>
  );
};

export default NavList;
