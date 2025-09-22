import TextInput from "../../../../components/common/TextInput";
import useQuery from "../../../../hooks/UseQuery";
import ReferenceStepForm from "./ReferenceStepForm";
import { useLocation } from "react-router-dom";
import ReferenceStepView from "./ReferenceStepView";
import { useEffect } from "react";

const ReferenceStep = () => {
  const location = useLocation();
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
