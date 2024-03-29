import { glass, theme } from "../../utils/theme";

export const styles = {
  accordionContainer: {
    background: glass.background,
    backdropFilter: glass.backdropFilter,
    border: glass.border,
    boxShadow: glass.boxShadow,
    borderRadius: `10px !important`,
    marginTop: `0px !important`,
    marginBottom: theme.spacing(2),
    padding: { xs: "4px 8px", sm: "16px 16px" },
    "&:before": {
      display: "none",
    },
  },
  accordionDetailsText: {
    color: theme.palette.secondary.main,
  },
  accordionSummaryText: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.fontSize * 1.3,
    fontWeight: 500,
  },
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
  resoucesBackground: {
    position: "absolute",
    left: -720,
    top: { xs: -400, sm: -400 },
    zIndex: 0,
  },
  resoucesBodyContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(7),
    marginTop: theme.spacing(7),
    width: "100%",
  },
  resoucesContainer: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    position: "relative",
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
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
};
