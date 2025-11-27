import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

import { useResume } from "../../context/ResumeContext";

const BACKEND_BASE = "https://intelligent-cv-backend.onrender.com";

const Loader = () => (
  <div className="flex items-center justify-center p-12">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#EA723C]"></div>
  </div>
);

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-between transition-transform hover:-translate-y-1 duration-300">
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
    </div>
    <div className={`p-3 rounded-lg ${color}`}>{icon}</div>
  </div>
);

const decoded = localStorage.getItem("token")
  ? jwtDecode(localStorage.getItem("token"))
  : "";

const ResumeCard = ({ resume, onEdit, onDelete, onDownload }) => (
  <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full relative">
    <div
      onClick={onEdit}
      className="h-40 bg-gray-100 relative cursor-pointer overflow-hidden border-b border-gray-100"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-500">
        <div className="w-24 h-32 bg-white shadow-sm border border-gray-200 mx-auto mt-4"></div>
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
        <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 transform translate-y-2 group-hover:translate-y-0 transition-all">
          Open Editor
        </button>
      </div>
    </div>

    <div className="p-5 flex flex-col flex-1">
      <div className="flex-1">
        <h3
          className="font-semibold text-gray-900  text-lg"
          title={resume?.name || "Untitled Resume"}
        >
          {resume?.name || "Untitled Resume"}
        </h3>
        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Last edited: {new Date(resume?.updatedAt).toLocaleDateString()}
        </p>
      </div>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDownload();
          }}
          className="text-sm font-medium text-gray-600 hover:text-[#EA723C] flex items-center gap-1.5 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download
        </button>

        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const UserDashboard = () => {
  const navigate = useNavigate();
  const { setFormData } = useResume();

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${BACKEND_BASE}/api/resume/${id}`, {
        method: `DELETE`,
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Unable to delete resume");
      }

      const data = await response.json();
      toast.success(data.message);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message);
      console.error(err);
    }
  };
  const handleEdit = async (id) => {
    const resume = resumes.resumes.find((resume) => resume._id === id);
    setFormData({ ...resume, updating: true });
    navigate(`/dashboard/app/personalize?resumeId=${id}`);
  };

  const handleDownload = async (id) => {
    const resume = resumes.resumes.find((resume) => resume._id === id);
    console.log(resume);
    const response = await fetch(
      `https://intelligent-cv-backend.onrender.com/api/resume/${resume.templateId}/download `,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(resume),
      }
    );
    if (!response.ok) {
      toast.error(`An Error occured fetching user`);
      return;
    }

    const data = await response.json();
    const downloadUrl = data.url;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("target", "_blank");
    link.setAttribute("download", `resume-${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`Resume generated successfully`);
    navigate("/dashboard");
  };

  const fetchResumeInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://intelligent-cv-backend.onrender.com/api/resume/`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        toast.error(`An Error occured fetching user`);
        return;
      }

      const data = await response.json();
      setLoading(false);
      setResumes(data);
    } catch (error) {
      toast.error(`An Error occured fetching user`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumeInfo();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Manage your CVs and download options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {!loading && (
          <>
            <StatCard
              title="Total Resumes"
              value={resumes.count}
              icon={
                <svg
                  className="w-6 h-6 text-[#EA723C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
              color="bg-orange-50"
            />

            <StatCard
              title="Plan"
              value={decoded.currentPlan}
              icon={
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              color="bg-green-50"
            />
          </>
        )}
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">My Documents</h2>
        <span className="text-sm text-gray-500">
          {resumes.count} Document{resumes.count === 1 ? "" : "s"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          onClick={() => navigate("/resume-builder/app/choose-templates")}
          className="group border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer hover:border-[#EA723C] hover:bg-orange-50/50 transition-all min-h-[280px]"
        >
          <div className="w-14 h-14 rounded-full bg-gray-100 group-hover:bg-white group-hover:shadow-md flex items-center justify-center transition-all mb-4">
            <svg
              className="w-8 h-8 text-gray-400 group-hover:text-[#EA723C]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 group-hover:text-[#EA723C]">
            Create New Resume
          </h3>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Start from scratch or use a template
          </p>
        </div>

        {resumes.count > 0 &&
          resumes.resumes?.map((resume) => (
            <ResumeCard
              key={resume._id}
              resume={resume}
              onEdit={() => handleEdit(resume._id)}
              onDelete={() => handleDelete(resume._id)}
              onDownload={() => handleDownload(resume._id)}
            />
          ))}
      </div>

      {resumes.count === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-sm">
            You have no saved resumes. Click "Create New Resume" to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
