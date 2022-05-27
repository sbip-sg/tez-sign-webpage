import { Box, Link, Typography } from "@mui/material";
import React from "react";

import Logo from "../../components/Logo";

import { content } from "../../utils/content";
import { styles } from "./style";

const Footer = () => {
  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerBodyContainer}>
        <Box sx={styles.footerHead}>
          <Logo lightTheme />

          <Box sx={styles.grow} />

          <Box sx={styles.socialMediaContainer}>
            {content.footer?.socialMedia.map((media, index) => {
              return (
                <Link
                  href={media.link}
                  key={index}
                  underline="none"
                  target="_blank"
                  rel="noopener"
                >
                  <Box sx={styles.socialMediaIcon}>{media?.icon}</Box>
                </Link>
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

        <Link href={`mailto:${content.footer.email}`} sx={styles.emailText}>
          {content.footer.email}
        </Link>

        <Box sx={styles.grow} />

        <Typography sx={styles.copyrightText}>
          {content.footer.copyright}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
