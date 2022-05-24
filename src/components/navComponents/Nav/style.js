import { appBar, bodyWidth, theme } from "../../../utils/theme";

export const styles = {
  grow: {
    flexGrow: 1,
    marginLeft: "auto",
  },
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
  nav: {
    alignItems: "center",
    backgroundColor: theme.palette.grays.white,
    borderBottomColor: theme.palette.grays["300"],
    borderBottomWidth: 0,
    borderBottomStyle: "solid",
    display: "flex",
    [theme.breakpoints.only("xs")]: {
      borderBottomWidth: 0,
    },
  },
  toolbar: {
    height: appBar.height,
    maxWidth: bodyWidth.maxWidth,
    paddingBottom: theme.spacing(0),
    paddingLeft: `${theme.spacing(0)} !important`,
    paddingRight: `${theme.spacing(0)} !important`,
    paddingTop: theme.spacing(0),
    width: bodyWidth.width,
  },
};
