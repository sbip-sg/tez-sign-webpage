import { Box, Typography } from "@mui/material";
import React from "react";

import { styles } from "./style";

const Section = ({ children, content, header, id }) => {
  return (
    <Box component="div" id={id} sx={styles.sectionContainer}>
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
    </Box>
  );
};

export default Section;
