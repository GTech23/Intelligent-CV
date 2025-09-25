import { Link } from "react-router-dom";
import TextLogo from "../../components/common/TextLogo";
import { useEffect, useState } from "react";
import advanced from "../../assets/images/templates/advanced.avif";
import { useNavigate } from "react-router-dom";

const TemplateCard = () => {
  return (
    <>
      <div className="max-w-xs min-h-90 rounded-xl relative flex items-center justify-center bg-white shadow-lg">
        <Link
          to="/dashboard/app/personalize"
          className="py-3 px-8 text-white bg-[#EA723C] rounded-lg cursor-pointer absolute font-bold"
        >
          Select Template
        </Link>
      </div>
    </>
  );
};
const ChooseTemplates = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const handleTemplateSelect = (template) => {
    localStorage.setItem("selectedTemplate", template);
    setSelectedTemplate(template);
    navigate("/dashboard/app/personalize");
  };
  const [resume, setResume] = useState([]);
  const fetchResume = async () => {
    try {
      const response = await fetch(
        "https://intelligent-cv-backend.onrender.com/api/template",
        {
          method: "GET",
        }
      );
      const payload = await response.json();
      setResume(payload.templates);
    } catch (err) {
      console.error(err);
    } finally {
    }
  };
  useEffect(() => {
    fetchResume();
  }, []);
  return (
    <>
      <title>Resume Builder - Choose Templates</title>
      <section className="p-6 min-h-screen">
        <div className="p-4 bg-white fixed top-0 left-0 right-0 w-full">
          <TextLogo />
        </div>

        <div className="bg-neutral-100 min-h-screen mt-10 rounded-3xl p-6">
          <div className="flex items-center flex-col p-6 justify-center mb-8 space-y-4">
            <h1 className="text-4xl font-bold text-gray-700">
              Choose from our professionally designed templates
            </h1>
          </div>

          <div className="my-4 grid grid-cols-3 gap-4">
            {resume.map((template) => (
              <div
                key={template._id}
                className={`border-2 p-4 rounded-xl relative group cursor-pointer transition-all duration-200 ${
                  selectedTemplate === template._id
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => handleTemplateSelect(template._id)}
              >
                {template.isPremium && (
                  <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded shadow">
                    Premium
                  </span>
                )}
                <img
                  src={advanced}
                  alt={template.name}
                  className="w-full h-auto mb-4 rounded-lg"
                />
                <h2 className="text-xl font-semibold mb-2 text-center">
                  {template.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseTemplates;
