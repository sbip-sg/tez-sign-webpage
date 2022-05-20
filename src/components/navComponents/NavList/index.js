import { Box, Link, Typography } from "@mui/material";
import React from "react";

import { NAV_ROUTES } from "../../../utils/routes";
import { styles } from "./style";

const NavList = () => {
  return (
    <Box sx={styles.navListContainer}>
      {Array.from(NAV_ROUTES.keys()).map((key) => (
        <Link href={NAV_ROUTES.get(key).PATH} key={key} underline="none">
          <Typography sx={styles.navText}>
            {NAV_ROUTES.get(key).LABEL}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default NavList;
