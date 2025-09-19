import { Link } from "react-router-dom";
import Button from "../common/Button";
import TemplateCardPreview from "../common/TemplateCardPreview";
import modern from "../../assets/images/templates/modern.avif";
import chicago from "../../assets/images/templates/chicago.webp";
import latest from "../../assets/images/templates/2025.avif";
import elegant from "../../assets/images/templates/elegant.avif";
import advanced from "../../assets/images/templates/advanced.avif";
import majestic from "../../assets/images/templates/majestic.avif";

const templateMeta = [
  {
    name: `Modern`,
    image: modern,
  },
  {
    name: `Chicago`,
    image: chicago,
  },
  {
    name: `2025`,
    image: latest,
  },
  {
    name: `Elegant`,
    image: elegant,
  },
];

const JobWinningTemplate = () => {
  return (
    <section className="max-w-8xl mx-auto w-[95%]  min-h-150 p-6">
      <div className="flex items-center flex-col space-y-8 justify-center">
        <h2 className="text-4xl font-bold text-center mb-4">
          Job Winning Templates
        </h2>
        <p className="text-lg font-light text-center max-w-[900px] mx-auto">
          Our templates are designed and approved by HR experts to fit a wide
          range of jobs and experience levels. Choose your favorite to showcase
          your professional background and make your resume stand out among the
          competition.
        </p>

        <div>
          <Button to="/resume-templates" text="View More Resume Templates" />
        </div>
      </div>

      <div className=" grid grid-cols-4 mt-10 gap-8">
        {templateMeta.map((meta) => {
          return <TemplateCardPreview meta={meta} />;
        })}
      </div>
    </section>
  );
};

export default JobWinningTemplate;
