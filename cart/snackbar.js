import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { cartIconStore } from "./store";

export default function SimpleSnackbar({ message }) {
  const [opens, setOpens] = React.useState(true);
  const open = cartIconStore((state) => state.open);
  const setOpen = cartIconStore((state) => state.setOpen);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpens(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={opens}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              {message === "Item has been added to cart" && (
                <Button color="secondary" size="small" onClick={()=>setOpen(true)}>
                  View
                </Button>
              )}
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}
