import { Box, Button, Fade, Hidden, Slide, Typography } from "@mui/material";
import React from "react";

import { useInView } from "../../utils/useInView";
import { styles } from "./style";

const Card = ({ data, index }) => {
  const [setRef, visible] = useInView({
    threshold: 0.3,
  });

  return (
    <Box key={index} ref={setRef} sx={styles.cardContainer}>
      <Box sx={styles.cardImageContainer}>
        <Fade in={visible} timeout={1000}>
          <Box
            sx={
              ({ ...styles.cardImage },
              { backgroundImage: `url(${data.image.url})` })
            }
          />
        </Fade>
      </Box>

      <Fade in={visible} timeout={2000}>
        <Box sx={styles.cardContent}>
          <Typography variant={"h5"} sx={styles.cardHeader}>
            {data.header}
          </Typography>

          <Typography variant={"body"} sx={styles.cardText}>
            {data.content}
          </Typography>

          {data.action && (
            <Button sx={styles.button} color="primary" variant="outlined">
              {data.action}
            </Button>
          )}
        </Box>
      </Fade>
    </Box>
  );
};

export default Card;
