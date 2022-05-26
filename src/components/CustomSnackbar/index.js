import { Button, Snackbar } from "@mui/material";
import React from "react";
import { RiCloseLine } from "react-icons/ri";

import { styles } from "./style";

const CustomSnackbar = ({ snackbar, setSnackbar }) => {
  return (
    <Snackbar
      action={
        <Button
          color="inherit"
          sx={{ minWidth: "inherit" }}
          onClick={() => setSnackbar({ ...snackbar, isOpen: false })}
        >
          <RiCloseLine size="1.4em" />
        </Button>
      }
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={3000}
      open={snackbar.isOpen}
      onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
      message={snackbar.message}
      ContentProps={{ sx: styles.snackbar }}
    />
  );
};

export default CustomSnackbar;
