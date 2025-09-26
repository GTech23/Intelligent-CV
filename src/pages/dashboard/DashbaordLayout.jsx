import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function DashboardLayout() {
  useEffect(() => {
    document.title = "Intelligent CV | Dashboard";
    // check auth
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
