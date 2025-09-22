import TextInput from "../../../components/common/TextInput";

const ReferenceStep = () => {
  return (
    <>
      <div className="flex gap-8">
        <title>Resume Builder</title>
        <div className="max-w-5xl  w-full mx-auto">
          <h1 className="text-4xl font-bold text-gray-700">Add Reference</h1>

          <form action="#" className="my-4 flex items-start gap-8">
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="">
                <TextInput
                  name="reference-first-name"
                  placeholder={"First Name"}
                />
              </div>
              <div className="">
                <TextInput
                  name="reference-last-name"
                  placeholder={"Last Name"}
                />
              </div>
              <div className="col-span-2">
                <TextInput
                  name="reference-job-title"
                  placeholder={"Desired Job Title (Optional)"}
                />
              </div>
              <div className="col-span-2">
                <TextInput
                  name="reference-email"
                  placeholder={"Email Address"}
                />
              </div>
              <div className="">
                <TextInput
                  name="reference-phone"
                  placeholder={"Phone Number"}
                />
              </div>
              <div className="">
                <TextInput
                  name="reference-company"
                  placeholder={"Company or Organization Name*"}
                />
              </div>
              <div className="col-span-2">
                <TextInput
                  name="reference-relation"
                  placeholder={"Relationship To You"}
                />
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

export default ReferenceStep;
