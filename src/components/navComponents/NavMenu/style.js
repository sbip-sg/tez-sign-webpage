import { appBar, bodyWidth, theme } from "../../../utils/theme";

export const styles = {
  dialogHeader: {
    alignItems: "center",
    display: "flex",
    height: appBar.height,
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    paddingTop: theme.spacing(0),
    width: bodyWidth.width,
  },
  dialogHeaderContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  dialogListContainer: {
    display: "flex",
    flexDirection: "column",
    height: "50%",
    justifyContent: "center",
    width: "100%",
  },
  grow: {
    flexGrow: 1,
    marginLeft: "auto",
  },
  icon: {
    alignItems: "center",
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    marginLeft: theme.spacing(1),
  },
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
  navMenuContainer: {
    alignItems: "center",
    display: { md: "none", xs: "flex" },
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  navText: {
    alignItems: "center",
    display: "flex",
    color: theme.palette.grays.black,
    fontSize: theme.typography.fontSize * 2,
    fontWeight: 500,
    letterSpacing: 1.1,
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(6),
    textTransform: "inherit",
  },
};
