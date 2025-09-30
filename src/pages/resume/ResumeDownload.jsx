import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
const ResumeDownload = () => {
  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState("");
  const previewResume = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://intelligent-cv-backend.onrender.com/api/resume/68d5bce72877e6ed3effbb67/view`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        toast.error(`An Error occured rendering PDF`);
        return;
      }

      const data = await response.text();
      setHtml(data);
      console.log(data);
    } catch (error) {
      toast.error(`An Error occured rendering PDF`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    previewResume();
  }, []);
  return (
    <div>
      <div className="max-w-5xl mx-auto w-full flex items-center justify-center p-6">
        <div className="min-h-[297mm] shadow-2xl drop-shadow-xl rounded-xl flex items-center justify-center bg-white w-[210mm]">
          {loading ? (
            <Loader />
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: html }}
              style={{ width: "100%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;
