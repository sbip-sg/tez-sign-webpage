import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import heroImage from "../../assets/images/dummy_image.png";
import { content } from "../../utils/content";
import { styles } from "./style";

const Hero = () => {
  return (
    <Box sx={styles.heroContainer}>
      <Box sx={styles.heroBody}>
        <Typography variant={"h2"} sx={styles.heroHead}>
          {content.hero.slogan}
        </Typography>

        <Typography sx={styles.heroContent}>
          {content.hero.subSlogan}
        </Typography>
      </Box>

      <Box sx={styles.heroImageContainer}>
        <Image src={heroImage} alt={"hero_image"} />
      </Box>
    </Box>
  );
};

export default Hero;
