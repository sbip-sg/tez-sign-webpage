import { Box, Typography } from "@mui/material";
import * as React from "react";

import Hero from "../src/components/Hero";
import Products from "../src/components/Products";
import Nav from "../src/components/navComponents/Nav";

export default function Index() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        width: "100%",
      }}
    >
      <Nav />

      <Hero />

      <Products />
    </Box>
  );
}
