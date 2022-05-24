import { Box } from "@mui/material";
import React from "react";

import Card from "../Card";
import Section from "../Section";

import { content } from "../../utils/content";
import { NAV_ROUTES } from "../../utils/routes";
import { styles } from "./style";

const Products = () => {
  return (
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
  );
};

export default Products;
