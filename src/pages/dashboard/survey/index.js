import { AddSurveyBtn } from "../../../components/AddSurveyBtn";
import { SurveyInput } from "../../../components/SurveyInput";
import { SurveyNameInput } from "../../../components/SurveyNameInput";

export default function Survey() {
  return (
    <>
      <SurveyNameInput />
      <SurveyInput />
      <AddSurveyBtn />
    </>
  );
}
