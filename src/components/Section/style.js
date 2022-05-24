import { bodyWidth, theme } from "../../utils/theme";

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
  sectionBody: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    zIndex: 1,
    [theme.breakpoints.only("xs")]: {
      minWidth: "80%",
    },
  },
  sectionContainer: {
    alignItems: "start",
    display: "flex",
    justifyContent: "center",
    marginBottom: { xs: theme.spacing(2), sm: theme.spacing(10) },
    marginTop: { xs: theme.spacing(2), sm: theme.spacing(10) },
    maxWidth: bodyWidth.maxWidth,
    // overflow: "hidden",
    position: "relative",
    width: bodyWidth.width,
  },
  sectionDivider: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    height: 4,
    width: 80,
  },
  sectionText: {
    color: theme.palette.secondary.main,
    lineHeight: 1.5,
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(5),
  },
  sectionTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    letterSpacing: 1,
    lineHeight: 1.5,
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(1),
  },
};
