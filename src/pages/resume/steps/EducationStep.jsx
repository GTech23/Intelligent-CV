import TextInput from "../../../components/common/TextInput";
const EducationStep = () => {
  return (
    <>
      <div className="flex gap-8">
        <title>Resume Builder</title>
        <div className="max-w-5xl mx-auto  w-full">
          <h1 className="text-4xl font-bold text-gray-700">Education</h1>
          <p>
            Great job! You're onto the next section. Where did you attend
            college or university?
          </p>

          <form action="#" className="my-4 flex items-start gap-8">
            <div className="grid grid-cols-2 w-full gap-8">
              <div className="">
                <TextInput name="school" placeholder={"School Name"} />
              </div>
              <div className="">
                <TextInput name="location" placeholder={"School Location"} />
              </div>
              <div className="">
                <TextInput name="degree" placeholder={"Degree or Program"} />
              </div>
              <div className="">
                <TextInput
                  name="field-of-study"
                  placeholder={"Field of Study"}
                />
              </div>
              <div className="">
                <TextInput
                  name="graduation-month"
                  placeholder={"Graduation Month "}
                />
              </div>
              <div className="">
                <TextInput
                  name="graduation-year"
                  placeholder={"Graduation Year"}
                />
              </div>

              <div className="col-span-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-orange-400 w-5 h-5"
                  name="currently-work-here"
                  id=""
                />
                <label htmlFor="">Remove graduation date from resume</label>
              </div>

              <button className="py-3 rounded-2xl px-9 border-1 cursor-pointer border-gray-400 font-bold ">
                Back
              </button>
              <button className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border-1  font-bold ">
                Save & Next
              </button>
            </div>
          </form>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default EducationStep;
