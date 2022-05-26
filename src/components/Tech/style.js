import { theme } from "../../utils/theme";

export const styles = {
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
    right: -640,
    top: { xs: -1060, sm: -1650 },
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
