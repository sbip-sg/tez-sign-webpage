import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
    useNextVariants: true,
  },
  palette: {
    background: {
      default: "#fff",
      dark: "#0c121f",
      glass: "rgba(255, 255, 255, 0.2)",
      //   default:'linear-gradient(280deg, rgba(11,18,27, 1) 0%, rgba(12,18,32, 1) 100%)'
    },
    primary: {
      main: "#F59700",
      linearGradient: "linear-gradient(90deg, #38BFFF 0%, #0F5FF2 79.69%)",
    },
    secondary: {
      main: "#1e1b36",
    },
    danger: {
      main: red.A400,
    },
    grays: {
      white: "#fff",
      100: "#f6f8fa",
      200: "#f0f2f5",
      300: "#e4e6ef",
      400: "#b6b6c4",
      500: "#a2a6b8",
      600: "#7e8299",
      700: "#5e6278",
      800: "#4f5058",
      900: "#404254",
      1000: "#121526",
      1100: "#07080f",
      black: "#000",
    },
  },
});

export const appBar = {
  height: 80,
  width: "100%",
};

export const bodyWidth = {
  maxWidth: 2200,
  width: "85%",
};

export const glass = {
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0px 4px 12px rgba(184, 184, 184, 0.25)",
};
