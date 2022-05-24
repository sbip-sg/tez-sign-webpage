import { Box, Slide } from "@mui/material";
import Image from "next/image";
import React from "react";

import Card from "../Card";
import Section from "../Section";

import background from "../../assets/background/background_2.png";
import { useInView } from "../../hooks/useInView";
import { content } from "../../utils/content";
import { NAV_ROUTES } from "../../utils/routes";
import { styles } from "./style";

const Tech = () => {
  const [setRef, visible] = useInView({
    threshold: 0.1,
  });

  return (
    <Box ref={setRef} sx={styles.techContainer}>
      <Section
        content={content.tech.content}
        header={content.tech.header}
        id={NAV_ROUTES.get("TECHNOLOGIES").ID}
      >
        <Box sx={styles.techItems}>
          {content.tech?.items.map((item, index) => {
            return <Card data={item} key={index} imageSize="sm" />;
          })}
        </Box>
      </Section>

      <Slide direction="left" in={visible} timeout={800}>
        <Box sx={styles.techBackground}>
          <Image src={background} alt={"background_image"} />
        </Box>
      </Slide>
    </Box>
  );
};

export default Tech;
