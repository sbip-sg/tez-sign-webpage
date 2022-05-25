import { Box, Link, Typography } from "@mui/material";
import React from "react";

import { NAV_ROUTES } from "../../../utils/routes";
import { styles } from "./style";

const NavList = () => {
  const handleOnClickOption = (id) => (event) => {
    // if (typeof window !== "undefined") {
      document.querySelector(`#${id}`)?.scrollIntoView({
        behavior: "smooth",
      });
    // }
  };

  return (
    <Box sx={styles.navListContainer}>
      {Array.from(NAV_ROUTES.keys()).map((key) => (
        // <Link href={NAV_ROUTES.get(key).PATH} key={key} underline="none">
        <Typography
          key={key}
          sx={styles.navText}
          onClick={handleOnClickOption(NAV_ROUTES.get(key).ID)}
        >
          {NAV_ROUTES.get(key).LABEL}
        </Typography>
        // </Link>
      ))}
    </Box>
  );
};

export default NavList;
