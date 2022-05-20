import { theme } from "../../utils/theme";

export const styles = {
  button: {
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(1.5),
    width: 200,
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(10),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(3),
    },
  },
  cardContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    justifyContent: "flex-start",
    overflow: "hidden",
    position: "relative",
    width: { xs: "100%", sm: "24%" },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
  },
  cardImage: {
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "100%",
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      filter: "brightness(1) grayscale(0)",
    },
  },
  cardImageContainer: {
    minHeight: 450,
    width: "45%",
    [theme.breakpoints.only("xs")]: {
      height: 230,
      minHeight: "inherit",
      width: "100%",
    },
  },
  cardText: {
    color: theme.palette.text.light,
    lineHeight: 1.5,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    [theme.breakpoints.only("xs")]: {
      color: theme.palette.primary.contrastText,
      marginBottom: theme.spacing(1),
      fontSize: theme.typography.fontSize * 1.2,
    },
  },
  cardHeader: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    lineHeight: 1.5,
    marginBottom: theme.spacing(2.5),
  },
  grow: {
    flexGrow: 1,
    marginLeft: "auto",
  },
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
};
