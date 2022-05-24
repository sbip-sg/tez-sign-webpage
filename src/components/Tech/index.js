import { Box } from "@mui/material";
import React from "react";

import Card from "../Card";
import Section from "../Section";

import { content } from "../../utils/content";
import { NAV_ROUTES } from "../../utils/routes";
import { styles } from "./style";

const Tech = () => {
  return (
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
  );
};

export default Tech;
