import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
import { useResume } from "../../context/ResumeContext";

// Icons
const Icons = {
  ZoomIn: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
      />
    </svg>
  ),
  ZoomOut: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
      />
    </svg>
  ),
  Monitor: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  FileText: () => (
    <svg
      className="w-5 h-5"
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
  ),
};

const BACKEND_BASE = "https://intelligent-cv-backend.onrender.com";

const ResumeDownload = () => {
  const { formData } = useResume();
  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState("");
  const [fitMode, setFitMode] = useState("a4");
  const [zoom, setZoom] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const iframeRef = useRef(null);

  const template =
    typeof window !== "undefined"
      ? localStorage.getItem("selectedTemplate")
      : null;

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
        if (res.status === 429)
          toast.error("Too many requests. Please try again later.");
        else toast.error("Failed to render resume. Please try again.");
        return;
      }
      const text = await res.text();
      setHtml(text);
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while loading the preview.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setFitMode("fit"); // Default to readable width on mobile
        setZoom(1);
      } else {
        setFitMode("a4");
        setZoom(0.85);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    previewResume();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleZoom = (delta) => {
    setZoom((prev) => {
      const newZoom = Math.max(0.4, Math.min(2.5, prev + delta));
      return parseFloat(newZoom.toFixed(2));
    });
  };

  // Shared Controls Component to use in Header (Desktop) or Bottom Bar (Mobile)
  const ViewControls = () => (
    <div className="flex items-center justify-center gap-1 sm:gap-2 w-full sm:w-auto">
      {/* View Modes */}
      <div className="flex bg-gray-100 rounded-lg p-1 shadow-inner">
        <button
          onClick={() => {
            setFitMode("fit");
            setZoom(isMobile ? 1 : 1);
          }}
          className={`p-2 sm:px-3 sm:py-1.5 rounded-md transition-all ${
            fitMode === "fit"
              ? "bg-white text-orange-600 shadow-sm"
              : "text-gray-500"
          }`}
          title="Web View (Responsive)"
        >
          <Icons.Monitor />
        </button>
        <button
          onClick={() => {
            setFitMode("a4");
            setZoom(isMobile ? 0.5 : 0.8);
          }}
          className={`p-2 sm:px-3 sm:py-1.5 rounded-md transition-all ${
            fitMode === "a4"
              ? "bg-white text-orange-600 shadow-sm"
              : "text-gray-500"
          }`}
          title="A4 Print View"
        >
          <Icons.FileText />
        </button>
      </div>

      <div className="w-px h-6 bg-gray-300 mx-1"></div>

      {/* Zoom Controls */}
      <div className="flex items-center bg-gray-100 rounded-lg p-1 shadow-inner">
        <button
          onClick={() => handleZoom(-0.1)}
          className="p-2 hover:bg-white rounded-md text-gray-600 transition-colors active:bg-gray-200"
        >
          <Icons.ZoomOut />
        </button>
        <span className="text-xs font-mono w-10 text-center select-none text-gray-700 font-medium">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={() => handleZoom(0.1)}
          className="p-2 hover:bg-white rounded-md text-gray-600 transition-colors active:bg-gray-200"
        >
          <Icons.ZoomIn />
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-[100dvh] bg-gray-50 font-sans text-gray-900 overflow-hidden">
      {/* --- Header --- */}
      <header className="flex-none bg-white border-b border-gray-200 shadow-sm px-4 py-3 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 text-[#EA723C] rounded-lg">
              <Icons.FileText />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none">Preview</h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Review your document layout
              </p>
            </div>
          </div>

          {/* Desktop Controls (Hidden on Mobile) */}
          <div className="hidden md:block">
            <ViewControls />
          </div>

          {/* Placeholder for Download Button */}
          <div className="w-8"></div>
        </div>
      </header>

      {/* --- Main Canvas --- */}
      <main className="flex-1 relative overflow-hidden bg-gray-100/80 flex justify-center w-full">
        {/* Scrollable Container */}
        <div className="w-full h-full overflow-auto flex justify-center p-4 pb-24 sm:pb-8 sm:p-8 scroll-smooth">
          <div
            className={`transition-transform duration-200 ease-out origin-top bg-white shadow-2xl ring-1 ring-black/5 ${
              // If Fit Mode and Mobile, use full width, otherwise apply margins
              fitMode === "fit" && isMobile ? "w-full" : "my-4"
            }`}
            style={{
              width: fitMode === "a4" ? "210mm" : isMobile ? "100%" : "900px",
              minHeight: fitMode === "a4" ? "297mm" : "100%",
              transform: `scale(${zoom})`,
              marginBottom: isMobile ? "100px" : "0", // Extra scroll space for mobile bottom bar
            }}
          >
            {loading ? (
              <div className="flex flex-col items-center justify-center h-[60vh]">
                <Loader />
                <p className="text-sm text-gray-500 mt-4 animate-pulse">
                  Rendering...
                </p>
              </div>
            ) : (
              <iframe
                ref={iframeRef}
                title="Resume Preview"
                srcDoc={html}
                className="block bg-white"
                style={{
                  width: "100%",
                  height: fitMode === "a4" ? "297mm" : "100vh",
                  border: "none",
                  overflow: "hidden",
                  pointerEvents: "none", // Optional: Makes scrolling smoother on touch by ignoring iframe internal events
                }}
                onLoad={(e) => {
                  const doc = e.target.contentDocument;
                  if (doc) {
                    doc.body.style.margin = "0";
                    // Hide scrollbars inside iframe
                    doc.body.style.overflow = "hidden";
                  }
                }}
              />
            )}
          </div>
        </div>
      </main>

      {/* --- Mobile Bottom Bar Control --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe">
        <ViewControls />
      </div>
    </div>
  );
};

export default ResumeDownload;
