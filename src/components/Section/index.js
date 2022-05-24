import { Box, Fade, Typography } from "@mui/material";
import React from "react";

import { useInView } from "../../hooks/useInView";
import { styles } from "./style";

const TIMEOUT = 1000;

const Section = ({ children, content, header, id }) => {
  const [setRef, visible] = useInView({
    threshold: 0.1,
  });

  return (
    <Box component="div" id={id} ref={setRef} sx={styles.sectionContainer}>
      <Fade in={visible} timeout={TIMEOUT}>
        <Box component="div" sx={styles.sectionBody}>
          <Typography variant={"h3"} sx={styles.sectionTitle}>
            {header}
          </Typography>

          <Box component="div" sx={styles.sectionDivider} />

          {content && (
            <Typography variant={"h5"} sx={styles.sectionText}>
              {content}
            </Typography>
          )}

          {children}
        </Box>
      </Fade>
    </Box>
  );
};

export default Section;
