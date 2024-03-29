import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Slide,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import Section from "../Section";

import background from "../../assets/background/background_3.png";
import { useInView } from "../../hooks/useInView";
import { content } from "../../utils/content";
import { NAV_ROUTES } from "../../utils/routes";
import { styles } from "./style";

const Resources = () => {
  const [expandedIndex, setExpandedIndex] = useState([0]);
  const [setRef, visible] = useInView({
    threshold: 0.3,
  });

  const handleChangeExpandedPanel = (index) => () => {
    const newArr = expandedIndex.includes(index)
      ? expandedIndex.filter((ele) => ele !== index)
      : [...expandedIndex, index];

    setExpandedIndex(newArr);
  };

  return (
    <Box ref={setRef} sx={styles.resoucesContainer}>
      <Section
        content={content.resources.content}
        header={content.resources.header}
        id={NAV_ROUTES.get("RESOURCE").ID}
      >
        <Box sx={styles.resoucesBodyContainer}>
          {content.resources.items.map((item, index) => {
            return (
              <Accordion
                expanded={expandedIndex.includes(index)}
                key={index}
                sx={styles.accordionContainer}
                onChange={handleChangeExpandedPanel(index)}
              >
                <AccordionSummary
                  expandIcon={<RiArrowDownSLine size="1.6em" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={styles.accordionSummaryText}>
                    {item.header}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.accordionDetailsText}>
                    {item.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Section>

      {/* <Slide direction="right" in={visible} timeout={800}>
        <Box sx={styles.resoucesBackground}>
          <Image src={background} alt={"background_image"} />
        </Box>
      </Slide> */}
    </Box>
  );
};

export default Resources;
