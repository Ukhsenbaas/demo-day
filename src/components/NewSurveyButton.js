import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export const NewSurveyButton = () => {
  const { push } = useRouter();

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        onClick={() => {
          push("/dashboard/survey");
        }}
      >
        Create New Survey
      </Button>
    </Stack>
  );
};
