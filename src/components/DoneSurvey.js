import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const DoneSurvey = ({ onclick }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onclick} variant="contained">
        Done Survey
      </Button>
    </Stack>
  );
};

// () => {
//   console.log("hi");
//     firebasePushSurvey({data: formData, name: "jsaio"});
// }
