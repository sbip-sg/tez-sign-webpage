import { bodyWidth, theme } from "../../utils/theme";

export const styles = {
  addressText: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.fontSize * 1.6,
  },
  copyrightText: {
    color: theme.palette.secondary.main,
  },
  emailText: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    fontSize: theme.typography.fontSize * 1.2,
    textDecoration: "underline",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      color: theme.palette.grays[400],
    },
  },
  footerContainer: {
    alignItems: "flex-start",
    backgroundColor: theme.palette.grays.white,
    display: "flex",
    flexDirection: "column",
    height: 560,
    justifyContent: "center",
    paddingBottom: { xs: theme.spacing(11), sm: theme.spacing(12) },
    paddingTop: { xs: theme.spacing(11), sm: theme.spacing(12) },
    maxWidth: bodyWidth.maxWidth,
    overflow: "hidden",
    position: "relative",
    width: bodyWidth.width,
  },
  footerContent: {
    marginBottom: theme.spacing(2),
  },
  footerHead: {
    alignItems: { xs: "flex-start", sm: "center" },
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: { xs: "center", sm: "flex-start" },
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  grow: {
    flexGrow: 1,
    marginLeft: "auto",
  },
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
  socialMediaIcon: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
    marginRight: theme.spacing(2),
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      color: theme.palette.grays[400],
    },
  },
  socialMediaContainer: {
    display: "flex",
    marginTop: { xs: theme.spacing(2), sm: 0 },
  },
};
