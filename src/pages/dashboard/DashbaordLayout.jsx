import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
export default function DashboardLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Intelligent CV | Dashboard";
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/dashboard/app/account/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
