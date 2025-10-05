import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/common/Loader";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ChooseTemplates from "./pages/resume/ChooseTemplates";

// Resume Step Imports
import ContactStep from "./pages/resume/steps/ContactStep";
import WorkExperienceStep from "./pages/resume/steps/experience/WorkExperienceStep";
import CertificationStep from "./pages/resume/steps/CertificationStep";
import SkillStep from "./pages/resume/steps/SkillStep";
import SummaryStep from "./pages/resume/steps/SummaryStep";
import ReferenceStep from "./pages/resume/steps/reference/ReferenceStep";

import HomeLayout from "./components/layout/HomeLayout";
import ResumeLayout from "./components/layout/ResumeLayout";

import { useEffect, useState } from "react";

// Context
import { ResumeProvider } from "./context/ResumeContext";
import ResumeFinalize from "./pages/resume/steps/ResumeFinalize";
import ResumeDownload from "./pages/resume/ResumeDownload";
import EducacationStep from "./pages/resume/steps/education/EducationStep";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Dashboard Imports
import DashboardLayout from "./pages/dashboard/DashbaordLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import ScrollToTop from "./components/common/ScrollToTop";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  {
    return loading ? (
      <div className="h-screen font-bold w-full flex  flex-col items-center justify-center">
        <Loader />
        Intelligent CV is loading, Please wait...
      </div>
    ) : (
      <>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ResumeProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
              </Route>
              <Route path="/dashboard/app/account/login" element={<Login />} />
              <Route
                path="/dashboard/app/account/create"
                element={<Register />}
              />
              <Route
                path="/resume-builder/app/choose-templates"
                element={<ChooseTemplates />}
              />
              <Route
                path="/dashboard/app/account/forgot-password"
                element={<ForgotPassword />}
              />
              <Route
                path="/dashboard/app/personalize"
                element={<ResumeLayout />}
              >
                <Route index element={<ContactStep />} />
                <Route
                  path="/dashboard/app/personalize/work_experience"
                  element={<WorkExperienceStep />}
                />
                <Route
                  path="/dashboard/app/personalize/education"
                  element={<EducacationStep />}
                />
                <Route
                  path="/dashboard/app/personalize/certification"
                  element={<CertificationStep />}
                />
                <Route
                  path="/dashboard/app/personalize/skill"
                  element={<SkillStep />}
                />
                <Route
                  path="/dashboard/app/personalize/summary"
                  element={<SummaryStep />}
                />
                <Route
                  path="/dashboard/app/personalize/reference"
                  element={<ReferenceStep />}
                />
                <Route
                  path="/dashboard/app/personalize/finalize"
                  element={<ResumeFinalize />}
                />
                <Route
                  path="/dashboard/app/personalize/done"
                  element={<ResumeDownload />}
                />
              </Route>

              <Route path="/dashboard/app/home" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </ResumeProvider>
      </>
    );
  }
};

export default App;
