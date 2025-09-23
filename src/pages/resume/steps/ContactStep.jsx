import { FaUserCircle, FaUpload } from "react-icons/fa";
import { useResume } from "../../../context/ResumeContext";
import { useRef } from "react";

const ContactStep = () => {
  const { formData, setFormData } = useResume();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const jobTitleRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const countryRef = useRef(null);
  const cityRef = useRef(null);
  const provinceRef = useRef(null);
  const postalCodeRef = useRef(null);

  const savePersonal = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value,
      },
    }));
  };

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
              <input
                ref={firstNameRef}
                name="firstName"
                placeholder={"First Name"}
                className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                onBlur={savePersonal}
              />
            </div>
            <div className="">
              <input
                ref={lastNameRef}
                name="lastName"
                placeholder={"Last Name"}
                className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                onBlur={savePersonal}
              />
            </div>
            <div className="col-span-2">
              <input
                ref={jobTitleRef}
                name="title"
                placeholder={"Desried Job Title (Optional)"}
                className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                onBlur={savePersonal}
              />
            </div>
            <div className="">
              <input
                ref={emailRef}
                name="email"
                placeholder={"Email Address"}
                onBlur={savePersonal}
                className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            <div className="">
              <input
                ref={phoneRef}
                name="phone"
                onBlur={savePersonal}
                placeholder={"Phone Number"}
                className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            <div className="">
              <input
                ref={countryRef}
                name="country"
                placeholder={"Country"}
                className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            <div className="">
              <input
                ref={cityRef}
                name="city"
                placeholder={"City"}
                onBlur={savePersonal}
                className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            <div className="">
              <input
                ref={provinceRef}
                name="state"
                placeholder={"State or Province"}
                className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                onBlur={savePersonal}
              />
            </div>
            <div className="">
              <input
                ref={postalCodeRef}
                name="postalCode"
                placeholder={"Postal Code"}
                className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                onBlur={savePersonal}
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
  );
};

export default ContactStep;
