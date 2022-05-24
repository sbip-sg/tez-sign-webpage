import { Box } from "@mui/material";
import React from "react";

import Card from "../Card";
import Section from "../Section";

import { content } from "../../utils/content";
import { NAV_ROUTES } from "../../utils/routes";
import { styles } from "./style";

const Team = () => {
  return (
    <Section
      content={content.team.content}
      header={content.team.header}
      id={NAV_ROUTES.get("TEAM").ID}
    >
      <Box sx={styles.teamItems}>
        {content.team?.items.map((item, index) => {
          return <Card data={item} key={index} imageSize="lg" />;
        })}
      </Box>
    </Section>
  );
};

export default Team;
