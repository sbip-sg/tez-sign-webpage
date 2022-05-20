import { Box, Fade, Typography } from "@mui/material";
import React from "react";

import Card from "../Card";
import Section from "../Section";

import { content } from "../../utils/content";
import { useInView } from "../../utils/useInView";
import { styles } from "./style";

const TIMEOUT = 1000;

const Products = () => {
  const [setRef, visible] = useInView({
    threshold: 0.3,
  });

  return (
    <Box sx={styles.productsContainer}>
      <Section
        header={content.products.header}
        content={content.products.content}
      >
        <Box sx={styles.productItems}>
          {content.products.items.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </Box>
      </Section>
    </Box>
  );
};

export default Products;
