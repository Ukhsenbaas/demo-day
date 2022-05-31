import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const AnswerName = () => {
  const handleChange = (e) =>{
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
      <Box id="answerContainer">
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder="Type answer"
        defaultValue=""
        size="small"
        onChange={handleChange}
      />
    </Box>
    </Stack>
    
  );
};





