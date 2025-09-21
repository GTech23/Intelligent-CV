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

const Sidebar = () => {
  const steps = [
    { name: "Contact", icon: <FaUser /> },
    { name: "Experience", icon: <FaBriefcase /> },
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Certifications", icon: <FaCertificate /> },
    { name: "Skills", icon: <FaTools /> },
    { name: "Professional Summary", icon: <FaPenNib /> },
    { name: "References", icon: <FaAddressBook /> },
    { name: "Finalize", icon: <FaFileAlt /> },
  ];

  return (
    <aside className="max-w-xs px-6  w-full fixed left-0 h-full mt-10">
      <ul>
        <li className="p-2 flex items-center gap-4 bg-blue-50 cursor-pointer rounded-lg">
          <div className="h-8 flex items-center justify-center w-8 rounded-full bg-blue-600">
            {" "}
            <FaUser className="text-white" />
          </div>
          <span className="text-md">Contact</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
