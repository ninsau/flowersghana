import { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  transform: 'translateZ(0)',
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    background: '#000',
  },
}));

export default function BackdropComponent() {
    const classes = useStyles();
    const [open] = useState(true)

  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" /> 
      </Backdrop>
    </>
  );
}
