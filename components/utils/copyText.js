import React, { useState } from "react";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

export default function CopyText({ textToCopy }) {
  const [copy, setCopy] = useState("");

  const Copied = (url) => {
    navigator.clipboard.writeText(
      `https://www.flowersghana.com/bouquet/${url}`
    );
    setCopy("copied");
  };

  return (
    <>
      <FileCopyOutlinedIcon
        color={copy !== "" ? "secondary" : "inherit"}
        onClick={() => Copied(textToCopy)}
      />
    </>
  );
}
