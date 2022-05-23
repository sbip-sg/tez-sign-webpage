import { Box } from "@mui/material";
import React from "react";

import Card from "../Card";
import Section from "../Section";

import { content } from "../../utils/content";
import { styles } from "./style";

const Tech = () => {

  return (
      <Section header={content.tech.header} content={content.tech.content}>
        <Box sx={styles.techItems}>
          {content.tech?.items.map((item, index) => {
            return (
              <Card data={item} key={index} imageSize="sm" />
            );
          })}
        </Box>
      </Section>
  );
};

export default Tech;
