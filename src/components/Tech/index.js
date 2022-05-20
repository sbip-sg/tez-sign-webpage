import { Box, Fade } from "@mui/material";
import React from "react";

import Card from "../Card";
import Section from "../Section";

import { content } from "../../utils/content";
import { useInView } from "../../utils/useInView";
import { styles } from "./style";

const TIMEOUT = 1000;

const Tech = () => {
  const [setRef, visible] = useInView({
    threshold: 0.3,
  });

  return (
    <Box sx={styles.techContainer}>
      <Section header={content.tech.header} content={content.tech.content}>
        <Box sx={styles.techItems}>
          {content.tech.items.map((item, index) => {
            return (
              <Card data={item} key={index} imageSize="sm" width={"21%"} />
            );
          })}
        </Box>
      </Section>
    </Box>
  );
};

export default Tech;
