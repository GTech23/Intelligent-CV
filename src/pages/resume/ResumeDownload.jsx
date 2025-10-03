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
            "Content-Type": "text/html",
          },
        }
      );

      if (!response.ok) {
        toast.error(`An Error occurred rendering PDF`);
        return;
      }

      const data = await response.text();
      setHtml(data);
    } catch (error) {
      toast.error(`An Error occurred rendering PDF`);
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
      <div className="max-w-5xl mx-auto w-full flex items-center justify-center p-2">
        <div className="h-[297mm] w-[210mm] shadow-2xl drop-shadow-xl rounded-xl bg-white overflow-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-4 h-full">
              <Loader />
              <p>Preparing Preview</p>
            </div>
          ) : (
            <iframe
              title="Resume Preview"
              srcDoc={html}
              className="w-full h-full px-6 py-8 overflow-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;
