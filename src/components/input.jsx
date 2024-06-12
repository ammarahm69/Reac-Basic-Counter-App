import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "45ch"},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-search" label="Enter To Do" type="search" />
      </div>
    </Box>
  );
}
