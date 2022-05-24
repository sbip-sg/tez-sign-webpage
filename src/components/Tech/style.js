import { theme } from "../../utils/theme";

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
  techBackground: {
    position: "absolute",
    right: -480,
    top: { xs: -1300, sm: -1780 },
    zIndex: 0,
  },
  techContainer: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  techItems: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: theme.spacing(7),
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      minWidth: "80%",
    },
  },
};
