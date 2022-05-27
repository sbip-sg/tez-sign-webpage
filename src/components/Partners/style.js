import { bodyWidth, theme } from "../../utils/theme";

export const styles = {
  partnersBackground: {
    position: "absolute",
    right: -1000,
    top: { xs: -1120, sm: -1400 },
    zIndex: -1,
  },
  partnersBodyContainer: {
    alignItems: "center",
    backgroundColor: theme.palette.grays.white,
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    justifyContent: "center",
    paddingBottom: { xs: theme.spacing(14), sm: theme.spacing(15) },
    paddingTop: { xs: theme.spacing(10), sm: theme.spacing(11) },
    maxWidth: bodyWidth.maxWidth,
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  partnersContainer: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  partnerIcon: {
    backgroundColor: "transparent",
    borderRadius: "50%",
    height: 200,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(4),
    width: 200,
  },
  partnersItems: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  partnersTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    letterSpacing: 1,
    lineHeight: 1.5,
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(1),
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
