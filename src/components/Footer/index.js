import { Box, Typography } from "@mui/material";
import React from "react";

import Logo from "../../components/Logo";

import { content } from "../../utils/content";
import { styles } from "./style";

const Footer = () => {
  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerHead}>
        <Logo />

        <Box sx={styles.grow} />

        <Box sx={styles.socialMediaContainer}>
          {content.footer?.socialMedia.map((media, index) => {
            return (
              <Box key={index} sx={styles.socialMediaIcon}>
                {media?.icon}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box sx={styles.footerContent}>
        {content.footer?.address.map((line, index) => {
          return (
            <Typography key={index} sx={styles.addressText}>
              {line}
            </Typography>
          );
        })}
      </Box>

      <Typography sx={styles.emailText}>{content.footer.email}</Typography>

      <Box sx={styles.grow} />

      <Typography sx={styles.copyrightText}>
        {content.footer.copyright}
      </Typography>
    </Box>
  );
};

export default Footer;
