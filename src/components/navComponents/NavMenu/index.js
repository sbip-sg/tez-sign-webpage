import { Box, Dialog, Slide, Typography } from "@mui/material";
import React, { useState } from "react";
import { RiArrowRightLine, RiCloseLine, RiMenuLine } from "react-icons/ri";

import { NAV_ROUTES } from "../../../utils/routes";
import Logo from "../../Logo";
import { styles } from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClickOption = (id) => (event) => {
    setIsMenuOpen(false);

    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box sx={styles.navMenuContainer}>
      <RiMenuLine onClick={() => setIsMenuOpen(true)} size="1.6em" />

      <Dialog
        fullScreen
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        TransitionComponent={Transition}
      >
        <Box sx={styles.dialogHeaderContainer}>
          <Box sx={styles.dialogHeader}>
            <Logo />

            <Box sx={styles.grow} />

            <RiCloseLine onClick={() => setIsMenuOpen(false)} size="1.6em" />
          </Box>
        </Box>

        <Box sx={styles.dialogListContainer}>
          {Array.from(NAV_ROUTES.keys()).map((key) => (
            <Typography
              key={key}
              sx={styles.navText}
              onClick={handleOnClickOption(NAV_ROUTES.get(key).ID)}
            >
              {NAV_ROUTES.get(key).LABEL}
              
              <Box sx={styles.icon}>
                <RiArrowRightLine />
              </Box>
            </Typography>
          ))}
        </Box>
      </Dialog>
    </Box>
  );
};

export default NavMenu;
