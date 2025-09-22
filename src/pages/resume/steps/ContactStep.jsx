import { FaUserCircle, FaUpload } from "react-icons/fa";
import TextInput from "../../../components/common/TextInput";

const ContactStep = () => {
  return (
    <div className="flex gap-8">
      <title>Resume Builder</title>
      <div>
        <h1 className="text-4xl font-bold text-gray-700">
          Let's start with the basics
        </h1>
        <p>
          To help employers contact you, add your name, email, and phone number.
        </p>

        <form action="#" className="my-4 flex items-start gap-8">
          <div className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:border-blue-500 transition-all">
            <>
              <FaUserCircle className="text-5xl text-gray-400" />
              <p className="text-sm text-gray-600 mt-1">Add Photo</p>
              <FaUpload className="text-blue-500 mt-1" />
            </>

            <input type="file" accept="image/*" className="hidden" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="">
              <TextInput name="first-name" placeholder={"First Name"} />
            </div>
            <div className="">
              <TextInput name="last-name" placeholder={"Last Name"} />
            </div>
            <div className="col-span-2">
              <TextInput
                name="job-title"
                placeholder={"Desried Job Title (Optional)"}
              />
            </div>
            <div className="">
              <TextInput name="email" placeholder={"Email Address"} />
            </div>
            <div className="">
              <TextInput name="phone" placeholder={"Phone Number"} />
            </div>
            <div className="">
              <TextInput name="country" placeholder={"Country"} />
            </div>
            <div className="">
              <TextInput name="city" placeholder={"City"} />
            </div>
            <div className="">
              <TextInput name="state" placeholder={"State or Province"} />
            </div>
            <div className="">
              <TextInput name="postal-code" placeholder={"Postal Code"} />
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
  );
};

export default ContactStep;
