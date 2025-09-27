import { FaPlus } from "react-icons/fa6";
import { useResume } from "../../../context/ResumeContext";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const CertificationStep = () => {
  const { formData, setFormData } = useResume();
  const navigate = useNavigate();

  const handleCertificationChange = (index, value) => {
    const updatedCert = [...formData.certifications];
    updatedCert[index] = value;

    setFormData((prev) => ({
      ...prev,
      certifications: updatedCert,
    }));
  };

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
                {formData.certifications.map((cert, index) => (
                  <div key={index} className="relative w-full mb-3">
                    <input
                      name={`Certificate_id${index}`}
                      id={`Certificate_id${index}`}
                      onChange={(e) =>
                        handleCertificationChange(index, e.target.value)
                      }
                      value={cert}
                      placeholder={`Certification & License ${index + 1}`}
                      className="w-full px-6 pr-12 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                    />

                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700"
                    >
                      <FiTrash size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <FaPlus />
                <span className="hover:underline cursor-pointer">
                  Add another license or certification
                </span>
              </div>

              <div className=" col-span-1 flex items-center justify-between">
                <button
                  onClick={() => navigate(-1)}
                  type="button"
                  className="py-3 rounded-2xl px-9 border-1 cursor-pointer border-gray-400 font-bold "
                >
                  Back
                </button>
                <button
                  type="button"
                  className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border-1  font-bold "
                >
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
