import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const DoneSurvey = ({firebasePushSurvey, formData}) => {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={()=>{
        console.log('hi')
        firebasePushSurvey(formData,{surveyname: "1st sudalgaa"})
      }} variant="contained">Done Survey</Button>
    </Stack>
  );
};
