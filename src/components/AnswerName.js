import _ from "lodash";
import { useCallback } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const AnswerName = ({ setformData, index, formData, questionIndex }) => {
  function handleChange(event) {
    debounceFn(event.target.value, Number(event.target.id), formData);
  }
  const debounceFn = useCallback(_.debounce(handleDebounceFn, 1000), []);

  function handleDebounceFn(value, index, formData) {
    console.log(index, questionIndex, formData[questionIndex].answers[index]);

    formData[questionIndex].answers.splice(index, 1, value);
    console.log(formData[questionIndex].answers);
    setformData((prev) => ({
      ...prev,
      [questionIndex]: {
        ...formData[questionIndex],
        answers: [...formData[questionIndex].answers],
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
      <Box id="answerContainer">
        <TextField
          hiddenLabel
          id={index.toString()}
          placeholder="Type answer"
          defaultValue=""
          size="small"
          onChange={handleChange}
        />
      </Box>
    </Stack>
  );
};
