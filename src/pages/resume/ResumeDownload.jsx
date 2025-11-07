import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
import { useResume } from "../../context/ResumeContext";

const BACKEND_BASE = "https://intelligent-cv-backend.onrender.com";

const ResumeDownload = () => {
  const { formData } = useResume();
  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState("");
  const [fitMode, setFitMode] = useState("fit"); 
  const [zoom, setZoom] = useState(1);
  const [downloading, setDownloading] = useState(false);
  const iframeRef = useRef(null);

  const template = typeof window !== "undefined" ? localStorage.getItem("selectedTemplate") : null;

  const previewResume = async () => {
    if (!template) return;
    try {
      setLoading(true);
      const res = await fetch(`${BACKEND_BASE}/api/resume/${template}/view`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        if (res.status === 429) toast.error("Too many requests. Please try again later.");
        else toast.error("Failed to render resume. Please try again.");
        return;
      }

      const text = await res.text();
      setHtml(text);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) setFitMode("fit");
    previewResume();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold">Resume Preview</h1>
          <p className="text-sm text-gray-600">Inspect and download your resume. Use the controls to switch views or download a PDF.</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setFitMode("fit")}
              className={`px-3 py-1 rounded-full text-sm ${fitMode === "fit" ? "bg-[#EA723C] text-white" : "text-gray-700"}`}
              aria-pressed={fitMode === "fit"}
            >
              Fit
            </button>
            <button
              onClick={() => setFitMode("a4")}
              className={`px-3 py-1 rounded-full text-sm ${fitMode === "a4" ? "bg-[#EA723C] text-white" : "text-gray-700"}`}
              aria-pressed={fitMode === "a4"}
            >
              A4
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="zoom" className="text-sm text-gray-600 hidden sm:block">Zoom</label>
            <select
              id="zoom"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="text-sm border rounded px-2 py-1"
              aria-label="Zoom level"
            >
              <option value={1}>100%</option>
              <option value={0.85}>85%</option>
              <option value={0.7}>70%</option>
            </select>
          </div>

         
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div
          className="bg-white rounded-lg shadow-lg overflow-auto"
          style={
            fitMode === "fit"
              ? { width: "100%", maxWidth: 960, height: "78vh" }
              : { width: "min(100%,210mm)", height: "min(78vh, calc(210mm * 1.414))" }
        }
        >
          {loading ? (
            <div className="flex items-center justify-center h-full p-8">
              <Loader />
            </div>
          ) : (
            <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
              <iframe
                ref={iframeRef}
                title="Resume Preview"
                srcDoc={html}
                style={{
                  width: fitMode === "fit" ? `${100 / zoom}%` : "210mm",
                  height: fitMode === "fit" ? `${100 / zoom}%` : "297mm",
                  transform: `scale(${zoom})`,
                  transformOrigin: "top left",
                  border: "none",
                  display: "block",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;
