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
    maxWidth: bodyWidth.maxWidth,
    paddingBottom: { sm: theme.spacing(0), md: theme.spacing(10) },
    paddingTop: { xs: `${appBar.height}px`, sm: theme.spacing(10) },
    position: "relative",
    width: bodyWidth.width,
  },
  sectionDivider: {
    backgroundColor: theme.palette.primary.main,
    height: 4,
    width: 120,
  },
  sectionText: {
    color: theme.palette.secondary.main,
    lineHeight: 1.5,
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(5),
  },
  sectionTitle: {
    color: theme.palette.secondary.main,
    fontSize: {xs: '3rem', sm: '3.75rem'},
    fontWeight: 700,
    letterSpacing: 1,
    lineHeight: 1.5,
    marginBottom: theme.spacing(1),
  },
};
