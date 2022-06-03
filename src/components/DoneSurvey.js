import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const DoneSurvey = ({firebasePushSurvey}) => {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={()=>{
        console.log('hi')
        firebasePushSurvey({haha: '1wfasd'})
      }} variant="contained">Done Survey</Button>
    </Stack>
  );
};
