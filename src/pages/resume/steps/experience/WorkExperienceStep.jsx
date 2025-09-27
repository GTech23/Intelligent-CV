import useQuery from "../../../../hooks/UseQuery";
import WorkExperienceForm from "./WorkExperienceForm";
import WorkExperienceView from "./WorkExperienceView";

const WorkExperienceStep = () => {
  const experienceQuery = useQuery();
  return (
    <div>
      {experienceQuery.has("add_experience") ? (
        <WorkExperienceForm />
      ) : (
        <WorkExperienceView />
      )}
    </div>
  );
};

export default WorkExperienceStep;
