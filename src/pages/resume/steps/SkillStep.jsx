import "quill/dist/quill.snow.css";
import { FaPlus } from "react-icons/fa6";
import { InputWithTrash } from "../../../components/common/TextInput";

const SkillStep = () => {
  return (
    <>
      <div className="flex gap-8">
        <title>Resume Builder</title>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-700">Skills</h1>
          <p>
            You're on a roll. Let's find relevant skills for the job your
            applying for. Listing 6-10 skills is best.
          </p>

          <form action="#" className="my-4  items-start gap-8">
            <div className="grid grid-cols-1 gap-8">
              <div className="">
                <InputWithTrash name="skill_id" placeholder={"Skill 1"} />
              </div>

              <div className="flex items-center gap-2">
                <FaPlus />
                <span className="hover:underline cursor-pointer">
                  Add another skill
                </span>
              </div>

              <div className=" col-span-1 flex items-center justify-between">
                <button className="py-3 rounded-2xl px-9 border-1 cursor-pointer border-gray-400 font-bold ">
                  Back
                </button>
                <button className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border-1  font-bold ">
                  Save & Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SkillStep;
