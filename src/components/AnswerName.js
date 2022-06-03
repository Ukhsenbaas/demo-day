import _ from "lodash";
import { useCallback } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const AnswerName = ({ setformData, index }) => {
  function handleChange(event) {
    debounceFn(event.target.value, Number(event.target.id));
  }
  const debounceFn = useCallback(_.debounce(handleDebounceFn, 1000), []);

  function handleDebounceFn(value, id) {
    setformData((prev) => {
      let array = [...prev[length].answers];

      // console.log(prev[length].answers.length, id);
      if (prev[length].answers.length <= id) {
        array.push(value);
      } else {
        array[id] = value;
      }
      return {
        ...prev,
        [Object.keys(prev).length - 1]: {
          ...prev[length],
          answers: array,
        },
      };
    });
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
