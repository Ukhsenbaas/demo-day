import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import _ from "lodash";
import { useCallback } from "react";
export const QuestionInput = ({ setformData }) => {
  function handleChange(event) {
    debounceFn(event.target.value);
  }
  const debounceFn = useCallback(_.debounce(handleDebounceFn, 1000), []);

  function handleDebounceFn(value) {
    setformData((prev) => ({
      ...prev,
      [Object.keys(prev).length - 1]: {
        ...prev[length],
        question: value,
      },
    }));
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
