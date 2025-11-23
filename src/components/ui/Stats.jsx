import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Resumes Created", value: 500, suffix: "+" },
  { label: "Active Users", value: 500, suffix: "+" },
  { label: "PDF Downloads", value: 1200, suffix: "+" },
  { label: "Templates Available", value: 5 },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact So Far</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#e76021]">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    separator=","
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  0
                )}
              </div>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
