import intelLogo from "../../assets/svg/intel.svg";
import jetblue from "../../assets/svg/jetblue.svg";
import dicks from "../../assets/svg/dicks.svg";
import uber from "../../assets/svg/uber.svg";
import zapier from "../../assets/svg/zapier.svg";
const logos = [
  {
    name: "Intels",
    src: intelLogo,
  },
  {
    name: "JetBlue",
    src: jetblue,
  },
  {
    name: "Dicks",
    src: dicks,
  },
  {
    name: "Uber",
    src: uber,
  },
  {
    name: "Zapier",
    src: zapier,
  },
];

const PartnersSection = () => {
  return (
    <section className="bg-white py-16 px-6 mb-30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-600 mb-8">
          Trusted by Students and Professionals from
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
