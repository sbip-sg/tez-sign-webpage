import { Box, Slide } from "@mui/material";
import Image from "next/image";
import React from "react";

import Card from "../Card";
import Section from "../Section";

import background from "../../assets/background/background_3.png";
import { useInView } from "../../hooks/useInView";
import { content } from "../../utils/content";
import { NAV_ROUTES } from "../../utils/routes";
import { styles } from "./style";

const Team = () => {
  const [setRef, visible] = useInView({
    threshold: 0.1,
  });

  return (
    <Box ref={setRef} sx={styles.teamContainer}>
      <Section
        content={content.team.content}
        header={content.team.header}
        id={NAV_ROUTES.get("TEAM").ID}
      >
        <Box sx={styles.teamBodyContainer}>
          <Box sx={styles.teamItems}>
            {content.team?.items.map((item, index) => {
              return <Card data={item} key={index} imageSize="lg" />;
            })}
          </Box>
        </Box>
      </Section>

      <Slide direction="right" in={visible} timeout={800}>
        <Box sx={styles.teamBackground}>
          <Image src={background} alt={"background_image"} />
        </Box>
      </Slide>
    </Box>
  );
};

export default Team;
