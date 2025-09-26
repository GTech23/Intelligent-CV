import TextLogo from "../../components/common/TextLogo";
import Sidebar from "../ui/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { useResume } from "../../context/ResumeContext";
const ResumeLayout = () => {
  const { formData } = useResume();

  const downloadResume = async () => {
    try {
      const response = await fetch(
        `https://intelligent-cv.onrender.com/api/resume/${localStorage.getItem(
          "selectedTemplate"
        )}/download`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        console.error("Failed to generate resume");
        return;
      }
      const blob = await response.blob();
      console.log(blob);
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      console.log(blob);
    } catch (error) {
      console.error("Error downloading resume:", error);
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
              Download
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
