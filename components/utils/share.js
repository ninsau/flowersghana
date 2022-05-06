import ShareIcon from "@material-ui/icons/Share";
import React, { useState } from "react";
import SimpleSnackbar from "../../cart/snackbar";

export default function Share({ shareData }) {
  const [copy, setCopy] = useState("");


  const Shared = () => {
    navigator.share(shareData)
    setCopy("Shared!");
  };

  return (
    <>
      {copy !== "" && <SimpleSnackbar message={"Shared!"} />}
      <ShareIcon
        color={copy !== "" ? "secondary" : "inherit"}
        onClick={() => Shared()}
      />
    </>
  );
}
