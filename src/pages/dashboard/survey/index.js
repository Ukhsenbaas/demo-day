import { Fragment, useState } from "react";
import { AddSurveyBtn } from "../../../components/AddSurveyBtn";
import { AnswerName } from "../../../components/AnswerName";
import { QuestionInput } from "../../../components/QuestionInput";
import { SurveyNameInput } from "../../../components/SurveyNameInput";
import { DoneSurvey } from "../../../components/DoneSurvey";

export default function Survey() {
  const [formData, setformData] = useState({});

  const addQuestion = (type) => {
    setformData((prev) => ({
      ...prev,
      [Object.keys(formData).length]: {
        question: "",
        type: type,
        answers: [],
      },
    }));
  };

  const addAnswer = (index) => {
    setformData((prev) => ({
      ...prev,
      [index]: {
        ...formData[index],
        answers: [...formData[index].answers, ""],
      },
    }));
  };
  console.log(formData);
  return (
    <>
      <SurveyNameInput />
      {Object.keys(formData).map((cur, index) => {
        const answers = formData[cur].answers;

        return (
          <Fragment key={index}>
            <QuestionInput />
            <AnswerName />
            {answers?.map((cur, index) => (
              <Fragment key={index}>
                <AnswerName />
              </Fragment>
            ))}
            <button onClick={() => addAnswer(cur)}>add</button>
          </Fragment>
        );
      })}
      <div>
        <AddSurveyBtn addQuestion={addQuestion} />
      </div>
      <div>
        <DoneSurvey />
      </div>
    </>
  );
}
