import { glass, theme } from "../../utils/theme";

export const styles = {
  grow: {
    flexGrow: 1,
    marginLeft: "auto",
  },
  margin: {
    display: "flex",
    margin: theme.spacing(1),
  },
  snackbar: {
    background: theme.palette.secondary.main,
    boxShadow: glass.boxShadow,
    borderRadius: `10px !important`,
  },
};
