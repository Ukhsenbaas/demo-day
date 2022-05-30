import { useState } from "react";
import { AddSurveyBtn } from "../../../components/AddSurveyBtn";
import { AnswerName } from "../../../components/AnswerName";
import { QuestionInput } from "../../../components/QuestionInput";
import { SurveyNameInput } from "../../../components/SurveyNameInput";

// const formData = [
//   {
//     number: "",
//     question: "",
//     type: "single",
//     answers: [],
//   },
// ];
export default function Survey() {
  const [formData, setformData] = useState({});

  const addQuestion = () => {
    setformData({
      ...formData,
      [Object.keys(formData).length]: {
        number: "",
        question: "",
        type: "single",
        answers: [],
      },
    });
    console.log(formData);
  };

  const addAnswer = (index) => {
    setformData((prev) => ({
      ...prev,
      [index]: { ...formData[index], answers: [...formData[index].answers, ""] },
    }));
  };

  return (
    <>
      <SurveyNameInput />
      {Object.keys(formData).map((cur, index) => {
        const answers = formData[cur].answers;
        console.log(answers);

        return (
          <div>
            <QuestionInput />
            <AnswerName />
            {answers?.map((cur, index) => (
              <>
                <AnswerName />
              </>
            ))}
            <button onClick={() => addAnswer(cur)}>add</button>
          </div>
        );
      })}

      <AddSurveyBtn addQuestion={addQuestion} />
    </>
  );
}
