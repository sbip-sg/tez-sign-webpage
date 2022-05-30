import { Box, Slide, Typography } from "@mui/material";
import React from "react";

import { useInView } from "../../hooks/useInView";
import { styles } from "./style";

const Section = ({ children, content, header, id }) => {
  const [setRef, visible] = useInView({
    threshold: 0.15,
  });

  return (
    <Box ref={setRef} component="div" id={id} sx={styles.sectionContainer}>
      <Box component="div" sx={styles.sectionBody}>
        <Typography sx={styles.sectionTitle}>{header}</Typography>

        <Slide direction="right" in={visible} timeout={400}>
          <Box component="div" sx={styles.sectionDivider} />
        </Slide>

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
