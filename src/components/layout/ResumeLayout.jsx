import TextLogo from "../../components/common/TextLogo";
import Sidebar from "../ui/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { useResume } from "../../context/ResumeContext";
import { toast } from "react-toastify";
import { useState, Suspense, useEffect } from "react";
const ResumeLayout = () => {
  const { formData } = useResume();
  const [loading, setLoading] = useState(false);

  const downloadResume = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://intelligent-cv-backend.onrender.com/api/resume/68d5bce72877e6ed3effbb67/download`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        toast.error(`An Error occured generated PDF`);
        return;
      }

      const blob = await response.blob();
      setLoading(false);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      toast.error(`An Error occured generated PDF`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const pathname = useLocation().pathname;
  return (
    <>
      <section className="py-6 px-0 min-h-screen">
        <div className="p-4 flex justify-between bg-white fixed top-0  left-0 right-0 w-full z-1000">
          <TextLogo />

          {pathname === "/dashboard/app/personalize/done" ? (
            <button
              onClick={downloadResume}
              className="py-2 px-3 bg-[#EA723C] text-white font-bold rounded-2xl flex items-center justify-center gap-4 cursor-pointer"
            >
              <FaDownload />
              {loading ? "Downloading" : "Download"}
            </button>
          ) : (
            ""
          )}
        </div>

        <Sidebar />
        <div className="ml-[320px] rounded-3xl bg-[#f3f5eb] min-h-screen  mt-10 p-8">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default ResumeLayout;
