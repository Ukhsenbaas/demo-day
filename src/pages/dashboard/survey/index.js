import { Fragment, useState } from "react";
import { AddSurveyBtn } from "../../../components/AddSurveyBtn";
import { AnswerName } from "../../../components/AnswerName";
import { QuestionInput } from "../../../components/QuestionInput";
import { SurveyNameInput } from "../../../components/SurveyNameInput";
import { DoneSurvey } from "../../../components/DoneSurvey";
import { useCollection } from "../../../firebase";

export default function Survey() {
  const [formData, setformData] = useState({});

  const { firebasePushSurvey } = useCollection("company/starpup1/surveys");
  const addQuestion = (type) => {
    setformData((prev) => ({
      ...prev,
      [Object.keys(formData).length]: {
        question: "",
        type: type,
        answers: [],
        results: [],
      },
    }));
  };
  console.log(formData);

  const addAnswer = (index) => {
    setformData((prev) => ({
      ...prev,
      [index]: {
        ...formData[index],
        answers: [...formData[index].answers, ""],
      },
    }));
  };
  return (
    <>
      <SurveyNameInput />
      {Object.keys(formData).map((cur, questionIndex) => {
        const answers = formData[cur].answers;
        const type = formData[cur].type;

        return (
          <Fragment key={questionIndex}>
            <QuestionInput
              addQuestion={addQuestion}
              setformData={setformData}
              questionIndex={questionIndex}
            />
            {/* <AnswerName setformData={setformData} index={index}/> */}
            {answers?.map((cur, index) => (
              <Fragment key={index}>
                <AnswerName
                  setformData={setformData}
                  index={index}
                  formData={formData}
                  questionIndex={questionIndex}
                />
              </Fragment>
            ))}
            {
              (type === 'single-selection' || type === 'multi-selection') ? (

                <button onClick={() => addAnswer(questionIndex)}>add</button>
              ):(<></>)
          }
      
          </Fragment>
        );
      })}
      <div>
        <AddSurveyBtn addQuestion={addQuestion} />
      </div>
      <div>
        <DoneSurvey
          firebasePushSurvey={firebasePushSurvey}
          formData={formData}
        />
      </div>
    </>
  );
}
