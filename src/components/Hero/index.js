import { Box, Fade, Slide, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import { useInView } from "../../hooks/useInView";
import background from "../../assets/background/background_hero.png";
import { content } from "../../utils/content";
import { styles } from "./style";

const Hero = () => {
  const [setRef, visible] = useInView({
    threshold: 0.1,
  });

  return (
    <Box ref={setRef} sx={styles.heroContainer}>
      <Box sx={styles.heroForeground}>
        <Box sx={styles.heroBody}>
          <Typography variant={"h2"} sx={styles.heroHead}>
            {content.hero.slogan}
          </Typography>

          <Typography sx={styles.heroContent}>
            {content.hero.subSlogan}
          </Typography>
        </Box>

        <Fade in={visible} timeout={1000}>
          <Box sx={styles.heroImageContainer}>
            <Image src={content.hero.image} alt={"hero_image"} />
          </Box>
        </Fade>
      </Box>

      <Slide direction="right" in={visible} timeout={1000}>
        <Box sx={styles.heroBackground}>
          <Image src={background} alt={"background_image"} />
        </Box>
      </Slide>
    </Box>
  );
};

export default Hero;
