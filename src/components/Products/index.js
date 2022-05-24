import { Box } from "@mui/material";

import React from "react";

import Card from "../Card";
import Section from "../Section";

import { useInView } from "../../hooks/useInView";
import { content } from "../../utils/content";
import { NAV_ROUTES } from "../../utils/routes";
import { styles } from "./style";

const Products = () => {
  const [setRef, visible] = useInView({
    threshold: 0.1,
  });

  return (
    <Box ref={setRef} sx={styles.productContainer}>
      <Section
        content={content.products.content}
        header={content.products.header}
        id={NAV_ROUTES.get("PRODUCTS").ID}
      >
        <Box sx={styles.productItems}>
          {content.products?.items.map((item, index) => {
            return <Card data={item} key={index} imageSize="lg" />;
          })}
        </Box>
      </Section>
    </Box>
  );
};

export default Products;
