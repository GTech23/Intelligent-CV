import { Link } from "react-router-dom";
import TextLogo from "../../components/common/TextLogo";

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
  return (
    <>
      <title>Resume Builder - Choose Templates</title>
      <section className="p-6 min-h-screen">
        <div className="p-4 bg-white fixed top-0 left-0 right-0 w-full">
          <TextLogo />
        </div>

        <div className="bg-neutral-100 h-screen mt-10 rounded-3xl p-6">
          <div className="flex items-center flex-col p-6 justify-center mb-8 space-y-4">
            <h1 className="text-4xl font-bold text-gray-700">
              Choose from our professionally designed templates
            </h1>
          </div>

          <div className="my-4 grid grid-cols-3 gap-4">
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseTemplates;
