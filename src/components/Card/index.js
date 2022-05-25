import { Box, Button, Fade, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import { useInView } from "../../hooks/useInView";
import { styles } from "./style";

const Card = ({ data, imageSize, index }) => {
  const [setRef, visible] = useInView({
    threshold: 0.3,
  });

  return (
    <Box
      key={index}
      ref={setRef}
      sx={{
        ...styles.cardContainer,
        width: { xs: "100%", sm: imageSize === "lg" ? "24%" : "21%" },
      }}
    >
      {data.image && (
        <Fade in={visible} timeout={800}>
          <Box
            sx={imageSize === "lg" ? styles.cardImageLg : styles.cardImageSm}
          >
            <Image src={data.image} alt={"card_image"} />
          </Box>
        </Fade>
      )}

      <Fade in={visible} timeout={900}>
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
