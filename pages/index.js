import { Box } from "@mui/material";
import React, { lazy, Suspense, useState } from "react";

import Contact from "../src/components/Contact";
import CustomSnackbar from "../src/components/CustomSnackbar";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Nav from "../src/components/navComponents/Nav";
import Partners from "../src/components/Partners";
import Products from "../src/components/Products";
import Resources from "../src/components/Resources";
import Team from "../src/components/Team";
import Technologies from "../src/components/Tech";

// const Contact = lazy(() => import("../src/components/Contact"));
// const Footer = lazy(() => import("../src/components/Footer"));
// const Hero = lazy(() => import("../src/components/Hero"));
// const Nav = lazy(() => import("../src/components/navComponents/Nav"));
// const Partners = lazy(() => import("../src/components/Partners"));
// const Products = lazy(() => import("../src/components/Products"));
// const Resources = lazy(() => import("../src/components/Resources"));
// const Team = lazy(() => import("../src/components/Team"));
// const Technologies = lazy(() => import("../src/components/Tech"));

import { bodyWidth } from "../src/utils/theme";

export default function Index() {
  const [snackbar, setSnackbar] = useState({ message: "", isOpen: false });

  return (
    // <Suspense fallback={<Typography>Loading...</Typography>}>
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

      <Box
        sx={{
          maxWidth: bodyWidth.maxWidth,
          overflowX: { xs: "hidden", sm: "hidden", md: "clip" },
          width: "100%",
        }}
      >
        <Hero />

        <Products />

        <Technologies />

        <Resources />

        <Team />

        <Contact setSnackbar={setSnackbar} />

        <Partners />

        <Footer />
      </Box>

      <CustomSnackbar snackbar={snackbar} setSnackbar={setSnackbar} />
    </Box>
    // </Suspense>
  );
}
