import * as React from "react";
import Button from "@mui/material/Button";

export default function DisableElevation({ children }) {
  return (
    <Button
      variant="outlined"
      disableElevation
      sx={{"&:hover": { backgroundColor: "#169976", color:"#FFF", borderColor: "transparent" }, padding:5 , paddingY: 2, borderRadius:5, fontFamily: "Fira Code", fontSize: "1.25em", fontWeight:"bold"}}
      color="success"
    >
      {children}
    </Button>
  );
}
