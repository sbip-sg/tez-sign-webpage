import { Box } from "@mui/material";
import React from "react";

import Card from "../Card";
import Section from "../Section";

import { content } from "../../utils/content";
import { styles } from "./style";

const Team = () => {

  return (
      <Section header={content.team.header} content={content.team.content}>
        <Box sx={styles.teamItems}>
          {content.team?.items.map((item, index) => {
            return (
              <Card data={item} key={index} imageSize="lg" />
            );
          })}
        </Box>
      </Section>
  );
};

export default Team;
