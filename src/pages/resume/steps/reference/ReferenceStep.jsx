import useQuery from "../../../../hooks/UseQuery";
import ReferenceStepForm from "./ReferenceStepForm";
import ReferenceStepView from "./ReferenceStepView";

const ReferenceStep = () => {
  const referenceQuery = useQuery();

  return (
    <div>
      {referenceQuery.has("add_reference") ? (
        <ReferenceStepForm />
      ) : (
        <ReferenceStepView />
      )}
    </div>
  );
};

export default ReferenceStep;
