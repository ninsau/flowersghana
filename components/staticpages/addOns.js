import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FetchAddOns from "../../calls/fetchAddOns";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AddOnsComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FetchAddOns />
    </div>
  );
}
