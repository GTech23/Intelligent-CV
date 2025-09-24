import { Fragment } from "react";
import { useResume } from "../../../../context/ResumeContext";

const ReferenceStepForm = () => {
  const { formData, setFormData } = useResume();
  const handleReferenceChange = (index, field, value) => {
    const updatedReference = [...formData.references];
    updatedReference[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      references: updatedReference,
    }));
  };
  return (
    <>
      <div className=" gap-8">
        <title>Resume Builder</title>
        <div className="max-w-5xl  w-full mx-auto">
          <h1 className="text-4xl font-bold text-gray-700">Add Reference</h1>

          <form action="#" className="my-4 flex items-start gap-8">
            <div className="grid grid-cols-2 gap-8 w-full">
              {formData.references.map((ref, index) => {
                return (
                  <Fragment key={index}>
                    <div className="">
                      <input
                        name="reference-first-name"
                        value={ref.firstName}
                        placeholder={"First Name"}
                        className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        onChange={(e) =>
                          handleReferenceChange(
                            index,
                            "firstName",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="">
                      <input
                        name="reference-last-name"
                        value={ref.lastName}
                        placeholder={"Last Name"}
                        className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        onChange={(e) =>
                          handleReferenceChange(
                            index,
                            "lastName",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        name="reference-job-title"
                        value={ref.jobTitle}
                        placeholder={"Desired Job Title (Optional)"}
                        className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        onChange={(e) =>
                          handleReferenceChange(
                            index,
                            "jobTitle",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        name="reference-email"
                        value={ref.email}
                        placeholder={"Email Address"}
                        className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        onChange={(e) =>
                          handleReferenceChange(index, "email", e.target.value)
                        }
                      />
                    </div>
                    <div className="">
                      <input
                        name="reference-phone"
                        value={ref.phone}
                        placeholder={"Phone Number"}
                        className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        onChange={(e) =>
                          handleReferenceChange(index, "phone", e.target.value)
                        }
                      />
                    </div>
                    <div className="">
                      <input
                        name="reference-company"
                        value={ref.company}
                        placeholder={"Company or Organization Name*"}
                        className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        onChange={(e) =>
                          handleReferenceChange(
                            index,
                            "company",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        name="reference-relation"
                        value={ref.relationshipStatus}
                        placeholder={"Relationship To You"}
                        className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        onChange={(e) =>
                          handleReferenceChange(
                            index,
                            "relationshipStatus",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </Fragment>
                );
              })}
              <button className="py-3 rounded-2xl px-9 border-1 cursor-pointer bg-white border-gray-400 font-bold ">
                Back
              </button>
              <button className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border-1  font-bold ">
                Save & Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReferenceStepForm;
