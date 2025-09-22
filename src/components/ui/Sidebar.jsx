import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaTools,
  FaPenNib,
  FaAddressBook,
  FaFileAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const steps = [
    {
      name: "Contact",
      icon: <FaUser className="text-white" />,
      bg_color: "bg-blue-600",
      url: "/dashboard/app/personalize",
    },
    {
      name: "Experience",
      icon: <FaBriefcase className="text-white" />,
      bg_color: "bg-orange-600",
      url: "/dashboard/app/personalize/work_experience",
    },
    {
      name: "Education",
      icon: <FaGraduationCap className="text-white" />,
      bg_color: "bg-green-600",
      url: "/dashboard/app/personalize/education",
    },
    {
      name: "Certifications",
      icon: <FaCertificate className="text-white" />,
      bg_color: "bg-pink-600",
      url: "/dashboard/app/personalize/certification",
    },
    {
      name: "Skills",
      icon: <FaTools className="text-white" />,
      bg_color: "bg-purple-600",
      url: "/dashboard/app/personalize/skill",
    },
    {
      name: "Professional Summary",
      icon: <FaPenNib className="text-white" />,
      bg_color: "bg-amber-600",
      url: "/dashboard/app/personalize/summary",
    },
    {
      name: "References",
      icon: <FaAddressBook className="text-white" />,
      bg_color: "bg-teal-600",
      url: "/dashboard/app/personalize/reference",
    },
    {
      name: "Finalize",
      icon: <FaFileAlt className="text-white" />,
      bg_color: "bg-red-600",
      url: "/dashboard/app/personalize/finalize",
    },
  ];

  return (
    <aside className="max-w-xs px-6  w-full fixed left-0 h-full mt-10">
      <ul>
        {steps.map((step, index) => (
          <NavLink
            to={step.url}
            key={index}
            end={step.url}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive ? "bg-blue-50" : ""
              }`
            }
          >
            <div
              className={`h-8 flex items-center justify-center w-8 rounded-full ${step.bg_color}`}
            >
              {step.icon}
            </div>
            <span className="text-md">{step.name}</span>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
