import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useCallback } from "react";
import _ from "lodash";

export const SurveyNameInput = () => {

  function handleChange(event) {
    debounceFn(event.target.value);
  }
  const debounceFn = useCallback(_.debounce(handleDebounceFn, 1000), []);

  function handleDebounceFn(value) {
  console.log(value)
  }


  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Survey Name" id="surveyName" onChange={handleChange} />
    </Box>
  );
}
