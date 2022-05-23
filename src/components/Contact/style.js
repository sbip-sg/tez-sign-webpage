import { glass, theme } from "../../utils/theme";

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
  button: {
    borderRadius: 50,
    fontSize: theme.typography.fontSize * 1.6,
    padding: 2,
    textTransform: "none",
    width: 296,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  error: {
    color: theme.palette.danger.main,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(7),
    width: "100%",
  },
  formRow: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      minWidth: "80%",
      marginBottom: theme.spacing(0),
      marginTop: theme.spacing(0),
    },
  },
  grow: {
    flexGrow: 1,
    marginLeft: "auto",
  },
  input: {
    background: glass.background,
    border: glass.border,
    boxShadow: glass.boxShadow,
    borderRadius: 2,
    flex: 1,
    marginRight: theme.spacing(2),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(2),
      width: "100%",
    },
  },
  inputBase: {
    color: theme.palette.secondary.main,
    padding: 2,
    width: "100%",
  },
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
};
