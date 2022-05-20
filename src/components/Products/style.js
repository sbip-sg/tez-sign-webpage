import { appBar, bodyWidth, theme } from "../../utils/theme";

export const styles = {
  banner: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: 350,
    position: "absolute",
    top: 0,
    width: 600,
    [theme.breakpoints.only("xs")]: {
      height: 200,
    },
  },
  grow: {
    flexGrow: 1,
    marginLeft: "auto",
  },
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
  productItems: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      minWidth: "80%",
    },
  },
  productsContainer: {
    alignItems: "start",
    display: "flex",
    justifyContent: "center",
    maxWidth: bodyWidth.maxWidth,
    overflow: "hidden",
    position: "relative",
    width: bodyWidth.width,
  },
};
