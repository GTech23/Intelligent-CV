import { FaUserCircle, FaUpload } from "react-icons/fa";
import { useResume } from "../../../context/ResumeContext";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ContactStep = () => {
  const { setFormData } = useResume();
  const navigate = useNavigate();
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
    <div className="mt-12">
      <title>Resume Builder</title>
      <div>
        <h1 className="text-2xl font-bold text-gray-700 sm:text-4xl mb-3">
          Let's start with the basics
        </h1>
        <p>
          To help employers contact you, add your name, email, and phone number.
        </p>

        <form action="#" className="my-4">
          <div className="w-40 hidden h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:border-blue-500 transition-all">
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
                autoComplete="false"
                className={`w-full px-6 border-gray-300 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                onBlur={savePersonal}
              />
            </div>
            <div className="">
              <input
                ref={lastNameRef}
                name="lastName"
                autoComplete="false"
                placeholder={"Last Name"}
                className={`w-full px-6 border-gray-300 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                onBlur={savePersonal}
              />
            </div>
            <div className="col-span-2">
              <input
                ref={jobTitleRef}
                name="title"
                autoComplete="false"
                placeholder={"Desried Job Title (e.g. Graphics Designer)"}
                className={`w-full px-6 border-gray-300 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                onBlur={savePersonal}
              />
            </div>
            <div className="">
              <input
                ref={emailRef}
                name="email"
                autoComplete="false"
                placeholder={"Email Address"}
                onBlur={savePersonal}
                className={`w-full px-6 border-gray-300 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            <div className="">
              <input
                ref={phoneRef}
                name="phone"
                onBlur={savePersonal}
                placeholder={"Phone Number"}
                autoComplete="false"
                className={`w-full px-6 border-gray-300 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            <div className="">
              <input
                ref={countryRef}
                autoComplete="off"
                name="country"
                placeholder={"Country"}
                className={`w-full px-6 border-gray-300 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            <div className="">
              <input
                ref={cityRef}
                name="city"
                placeholder={"City"}
                onBlur={savePersonal}
                className={`w-full px-6 border-gray-300 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            <div className="">
              <input
                ref={provinceRef}
                name="state"
                placeholder={"State"}
                className={`w-full px-6 border-gray-300 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                onBlur={savePersonal}
              />
            </div>
            <div className="">
              <input
                ref={postalCodeRef}
                name="postalCode"
                placeholder={"Postal Code"}
                className={`w-full px-6 border-gray-300 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                onBlur={savePersonal}
              />
            </div>

            <button
              onClick={() => navigate(-1)}
              type="button"
              className="py-2 rounded-2xl px-9 border-1 bg-white  cursor-pointer border-gray-400 font-bold "
            >
              Back
            </button>
            <button
              onClick={() =>
                navigate("/dashboard/app/personalize/work_experience")
              }
              type="button"
              className="py-2 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border-1  font-bold "
            >
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
