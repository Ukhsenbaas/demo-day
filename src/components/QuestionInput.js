import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const QuestionInput = () => {
  
const handleChange = (e) => {
  console.log(e.target.value)
}

  return (
    <Stack
      component="form"
      sx={{
        width: "62.5ch",
        marginTop: "10px",
        marginBottom: "10px",
      }}
      spacing={1}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue=""
        placeholder="Type your question here"
        size="small"
        onChange={handleChange}
      />
    </Stack>
  );
};
