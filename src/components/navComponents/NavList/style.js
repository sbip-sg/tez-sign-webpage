import { appBar, theme } from "../../../utils/theme";

export const styles = {
  indicator: {
    bottom: 0,
    height: 3,
    position: "absolute",
    width: "100%",
    zIndex: 0,
  },
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
  navListContainer: {
    alignItems: "center",
    display: { md: "flex", xs: "none" },
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  navText: {
    alignItems: "center",
    color: theme.palette.grays.black,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    fontSize: theme.typography.fontSize * 1,
    fontWeight: 400,
    height: appBar.height,
    justifyContent: "center",
    letterSpacing: 0.5,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    minWidth: 80,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    position: "relative",
    textDecoration: "none",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
};
