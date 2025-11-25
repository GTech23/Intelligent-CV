import TextLogo from "../../components/common/TextLogo";
import Sidebar from "../ui/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { FaSave, FaSync } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";
import { useResume } from "../../context/ResumeContext";
const ResumeLayout = () => {
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateloading] = useState(false);
  const { formData, setFormData } = useResume();
  const navigate = useNavigate();

  const updateResume = async () => {
    setUpdateloading(true);
    formData.templateId = localStorage.getItem("selectedTemplate");
    try {
      const response = await fetch(
        `https://intelligent-cv-backend.onrender.com/api/resume/${formData._id} `,
        {
          method: "PUT",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        toast.error(`An Error occured updating resume`);
        return;
      }
      setUpdateloading(false);
      navigate("/dashboard");
      toast.success("Resume updated successfully");
      setFormData({});
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    } finally {
      setUpdateloading(false);
    }
  };

  const saveResume = async () => {
    formData.templateId = localStorage.getItem("selectedTemplate");
    try {
      const response = await fetch(
        `https://intelligent-cv-backend.onrender.com/api/resume/`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      console.log(response);

      if (!response.ok) {
        toast.error(`An Error occured saving resume`);
        return;
      }
      navigate("/dashboard");
      toast.success("Resume saved successfully");
      setFormData({});
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const downloadResume = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://intelligent-cv-backend.onrender.com/api/resume/${localStorage.getItem(
          "selectedTemplate"
        )}/download`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        toast.error(`An Error occured generated PDF`);
        return;
      }

      const data = await response.json();
      setLoading(false);
      const url = data.url;
      const link = document.createElement("a");
      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();
      navigate("/");
      toast.success("Resume download was successful");
      setFormData({});
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
      <section className="py-2 px-0 min-h-screen md:p-6">
        <div className="p-4 flex justify-between bg-white fixed top-0  left-0 right-0 w-full z-1000">
          <TextLogo />

          {pathname === "/dashboard/app/personalize/done" ? (
            <>
              <div className="flex items-center gap-2">
                <button
                  onClick={downloadResume}
                  className="py-2 px-3 bg-[#EA723C] text-white font-bold rounded-2xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaDownload />
                  {loading ? "Downloading" : "Download"}
                </button>
                {formData.updating ? (
                  <button
                    onClick={updateResume}
                    className="py-1 px-2 bg-transparent text-[#EA723C] border-2 border-[#EA723C] font-bold rounded-2xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FaSync />
                    {updateLoading ? "Updating" : "Update"}
                  </button>
                ) : (
                  <button
                    onClick={saveResume}
                    className="py-1 px-2 bg-transparent text-[#EA723C] border-2 border-[#EA723C] font-bold rounded-2xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FaSave />
                    Save
                  </button>
                )}
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <Sidebar />
        <div className=" ml-0 rounded-3xl bg-[#f3f5eb] min-h-screen  mt-10 p-8 sm:ml-[320px]">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default ResumeLayout;
