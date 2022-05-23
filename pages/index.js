import { Box } from "@mui/material";
import * as React from "react";
import Contact from "../src/components/Contact";

import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Nav from "../src/components/navComponents/Nav";
import Products from "../src/components/Products";
import Team from "../src/components/Team";
import Technologies from "../src/components/Tech";

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

      <Technologies />

      <Team />

      <Contact />

      <Footer />
    </Box>
  );
}
