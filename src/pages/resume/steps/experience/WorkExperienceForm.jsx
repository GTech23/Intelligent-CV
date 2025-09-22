import TextInput from "../../../../components/common/TextInput";
import useQuery from "../../../../hooks/UseQuery";
useQuery;
const WorkExperienceForm = () => {
  const param = useQuery();

  return (
    <>
      <div className="flex gap-8">
        <title>Resume Builder</title>
        <div>
          <h1 className="text-4xl font-bold text-gray-700">Experience</h1>
          <p>
            This is going to be easy, we promise! Let's start with your most
            recent job.
          </p>

          <form action="#" className="my-4 items-start gap-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-6">
                <TextInput name="job-title" placeholder={"Job Title"} />
              </div>
              <div className="col-span-6">
                <TextInput
                  name="company"
                  placeholder={"Company or \nOrganization Name"}
                />
              </div>
              <div className="col-span-4">
                <TextInput name="country" placeholder={"Country"} />
              </div>
              <div className="col-span-4">
                <TextInput name="province" placeholder={"Province or State"} />
              </div>
              <div className="col-span-4">
                <TextInput name="city" placeholder={"city"} />
              </div>

              <div className="col-span-6">
                <TextInput name="start-month" placeholder={"Start Month"} />
              </div>

              <div className="col-span-6">
                <TextInput
                  type="number"
                  name="start-year"
                  placeholder={"Start Year"}
                />
              </div>
              <div className="col-span-6">
                <TextInput name="end-month" placeholder={"End Month"} />
              </div>

              <div className="col-span-6">
                <TextInput
                  type="number"
                  name="end-year"
                  placeholder={"End Year"}
                />
              </div>

              <div className="col-span-12 flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-orange-400 w-5 h-5"
                  name="currently-work-here"
                  id=""
                />
                <label htmlFor="">I currently work here</label>
              </div>

              <div className="col-span-12 flex justify-between">
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

export default WorkExperienceForm;
