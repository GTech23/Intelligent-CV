import useQuery from "../../../../hooks/UseQuery";
import WorkExperienceForm from "./WorkExperienceForm";
import WorkExperienceView from "./WorkExperienceView";
import { useResume } from "../../../../context/ResumeContext";

const WorkExperienceStep = () => {
  const experienceQuery = useQuery();
  const { formData } = useResume();
  const workExperience = formData.experience;
  console.log(workExperience);
  return (
    <div>
      {workExperience.length > 0 && !experienceQuery.has("add_experience") ? (
        <WorkExperienceView />
      ) : (
        <WorkExperienceForm />
      )}
    </div>
  );
};

export default WorkExperienceStep;
