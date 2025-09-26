import TextLogo from "../../components/common/TextLogo";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/dashboard/app/account/login", { replace: true });
  };
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6">
        <TextLogo />
      </div>
      <nav className="mt-10">
        <ul>
          <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
            Dashboard
          </li>
          <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
            My Resumes
          </li>
          <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
            Settings
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="px-6 py-3 block w-full text-left hover:bg-red-200 cursor-pointer text-red-500"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
