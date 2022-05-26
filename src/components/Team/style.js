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
  teamBackground: {
    position: "absolute",
    left: -720,
    top: { xs: -700, sm: -1000 },
    zIndex: 0,
  },
  teamBodyContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(7),
    width: "100%",
  },
  teamContainer: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  teamItems: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: theme.spacing(7),
    width: { xs: "100%", md: "80%" },
  },
};
