import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaTools,
  FaPenNib,
  FaAddressBook,
  FaQuestionCircle,
  FaFileAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { getValidToken } from "../../utils/auth";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const decodeJwtPayload = (token) => {
    if (!token) return null;
    try {
      const parts = token.split(".");
      if (parts.length < 2) return null;
      const payload = parts[1].replace(/-/g, "+").replace(/_/g, "/");

      const pad = payload.length % 4;
      const padded = pad ? payload + "=".repeat(4 - pad) : payload;
      const json = atob(padded);
      return JSON.parse(json);
    } catch (err) {
      return null;
    }
  };

  const token = getValidToken();
  const user = decodeJwtPayload(token) || null;
  const displayName =
    user?.name ||
    user?.fullName ||
    user?.given_name ||
    user?.preferred_username ||
    null;
  const email = user?.email || user?.email_address || null;
  const avatar = user?.picture || user?.avatar || null;

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
    } catch (e) {
      // ignore
    }
    navigate("/dashboard/app/account/login");
    toast.success("logout successful");
  };
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
    <aside className="max-w-xs px-6 hidden  w-full fixed left-0  mt-10 h-[90vh] sm:flex sm:flex-col sm:justify-between ">
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

      {/* Authenticated user card */}
      {user ? (
        <div className="flex items-center gap-3 p-4 rounded-lg mb-4 bg-white shadow-sm">
          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {avatar ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={avatar}
                alt="avatar"
                className="h-12 w-12 object-cover"
              />
            ) : (
              <span className="text-sm font-semibold text-gray-700">
                {((displayName || email || "").charAt(0) || "U").toUpperCase()}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-800 truncate">
              {displayName || email || "User"}
            </div>
            {email && (
              <div className="text-xs text-gray-500 truncate">{email}</div>
            )}
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:underline"
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-red-500 flex items-center gap-2 font-medium">
            Not Signed In <FaQuestionCircle />{" "}
          </p>

          <p className="text-sm text-zinc-700">
            You need to be authenticated before downloading your resume
          </p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
