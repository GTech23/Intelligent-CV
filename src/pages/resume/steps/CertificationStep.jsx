import { FaPlus } from "react-icons/fa6";
import { InputWithTrash } from "../../../components/common/TextInput";
const CertificationStep = () => {
  return (
    <>
      <div className=" gap-8 max-w-5xl mx-auto">
        <title>Resume Builder</title>
        <div>
          <h1 className="text-4xl font-bold text-gray-700">
            Certifications and licenses
          </h1>
          <p>
            If the job requires you to have a certain certifications or
            licenses, this is where you should list them.
          </p>

          <form action="#" className="my-4  items-start gap-8">
            <div className="grid grid-cols-1 gap-8">
              <div className="">
                <InputWithTrash
                  name="certificate_id"
                  placeholder={"Certificate & License"}
                />
              </div>

              <div className="flex items-center gap-2">
                <FaPlus />
                <span className="hover:underline cursor-pointer">
                  Add another license or certification
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

export default CertificationStep;
