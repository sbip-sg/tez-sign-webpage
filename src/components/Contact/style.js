import { glass, theme } from "../../utils/theme";

export const styles = {
  button: {
    borderRadius: 50,
    fontSize: theme.typography.fontSize * 1.6,
    marginTop: theme.spacing(5),
    padding: "12px 20px",
    textTransform: "none",
    width: 296,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  contactBackground: {
    position: "absolute",
    right: -640,
    top: { xs: -800, sm: -1100 },
    zIndex: -1,
  },
  contactContainer: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  error: {
    color: theme.palette.danger.main,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(7),
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
    backdropFilter: glass.backdropFilter,
    border: glass.border,
    boxShadow: glass.boxShadow,
    borderRadius: `10px !important`,
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
