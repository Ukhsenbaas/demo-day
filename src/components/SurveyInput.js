import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const SurveyInput = () => {
  const addField = () => {
    const field = document.createElement("p");
    field.innerHTML = ``;
    document.getElementById("answerContainer").appendChild(field);
    // <TextField
    //     hiddenLabel
    //     id="filled-hidden-label-normal"
    //     placeholder="Type answer"
    //     defaultValue=""
    //     onChange={(e) => {
    //       console.log(e.target.value);
    //     }}
    //     size="small"
    //   />
  };

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
      />
      <Box id="answerContainer">
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Type answer"
          defaultValue=""
          onChange={(e) => {
            // if(e.target.value===''){
            // }else{
            //     addField()
            // }
          }}
          size="small"
        />
        <button>add</button>
      </Box>
    </Stack>
  );
};

// textArrayfield = [<TextField/>, text]
