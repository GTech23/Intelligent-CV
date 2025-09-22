import useQuery from "../../../../hooks/UseQuery";
import EducationForm from "./EducationForm";
import EducationStepView from "./EducationStepView";

const EducacationStep = () => {
  const educationQuery = useQuery();

  return (
    <div>
      {educationQuery.has("add_school") ? (
        <EducationForm />
      ) : (
        <EducationStepView />
      )}
    </div>
  );
};

export default EducacationStep;
