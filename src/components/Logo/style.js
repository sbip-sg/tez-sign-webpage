import { theme } from "../../utils/theme";

export const styles = {
  logo: {
    // display: { md: "block", xs: "none" },
    display: "block",
    height: 30,
    width: 120,
  },
  logoContainer: {
    alignItems: "center",
    display: "flex",
  },
  logoIcon: {
    display: { md: "none", sm: "block" },
    height: 36,
    width: 36,
  },
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
};
