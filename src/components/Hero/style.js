import { bodyWidth, theme } from "../../utils/theme";

export const styles = {
  action: {
    display: "flex",
    marginTop: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "start !important",
    },
  },
  button: {
    background: theme.palette.primary.gradient,
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(8),
    width: 200,
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(3),
    },
  },
  grow: {
    flexGrow: 1,
    marginLeft: "auto",
  },
  heroBackground: {
    left: -480,
    position: "absolute",
    top: { xs: -520, sm: -680 },
    zIndex: 0,
  },
  heroBody: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.only("xs")]: {
      alignItems: "start !important",
    },
  },
  heroContainer: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  heroContent: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.fontSize * 1.6,
    lineHeight: 1.5,
    whiteSpace: "pre-line",
  },
  heroForeground: {
    alignItems: "center",
    display: "flex",
    flexDirection: { xs: "column-reverse", md: "row" },
    height: { xs: "fit-content", md: "90vh" },
    maxHeight: 1500,
    maxWidth: bodyWidth.maxWidth,
    minWidth: 600,
    width: bodyWidth.width,
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-end !important",
      marginBottom: theme.spacing(8),
      maxHeight: "inherit",
      maxWidth: bodyWidth.width,
      minWidth: bodyWidth.width,
    },
  },
  heroHead: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    letterSpacing: 1,
    lineHeight: 1.2,
    marginBottom: theme.spacing(2.5),
    whiteSpace: "pre-line",
    [theme.breakpoints.only("xs")]: {
      fontSize: theme.typography.fontSize * 3.5,
    },
  },
  heroImageContainer: {
    marginBottom: { xs: theme.spacing(4), sm: theme.spacing(0) },
    marginLeft: { sm: "auto" },
    width: { xs: "100%", sm: "36%", md: "100%" },
  },
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
};
