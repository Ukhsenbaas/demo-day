import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import _ from "lodash";

export const SurveyNameInput = ({ onchange }) => {
 

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label="Survey Name"
        id="surveyName"
        onChange={onchange}
      />
    </Box>
  );
};
