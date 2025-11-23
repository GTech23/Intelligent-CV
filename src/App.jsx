import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/common/Loader";
import ScrollToTop from "./components/common/ScrollToTop";
import { ResumeProvider } from "./context/ResumeContext";
import About from "./pages/About";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import UserDashboard from "./pages/dashboard/UserDashboard";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardProfile from "./pages/dashboard/DashboardProfile";
import Settings from "./pages/dashboard/Settings";

const Home = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ChooseTemplates = lazy(() => import("./pages/resume/ChooseTemplates"));

const ContactStep = lazy(() => import("./pages/resume/steps/ContactStep"));
const WorkExperienceStep = lazy(() =>
  import("./pages/resume/steps/experience/WorkExperienceStep")
);
const CertificationStep = lazy(() =>
  import("./pages/resume/steps/CertificationStep")
);
const SkillStep = lazy(() => import("./pages/resume/steps/SkillStep"));
const SummaryStep = lazy(() => import("./pages/resume/steps/SummaryStep"));
const ReferenceStep = lazy(() =>
  import("./pages/resume/steps/reference/ReferenceStep")
);
const ResumeFinalize = lazy(() =>
  import("./pages/resume/steps/ResumeFinalize")
);
const ResumeDownload = lazy(() => import("./pages/resume/ResumeDownload"));
const EducacationStep = lazy(() =>
  import("./pages/resume/steps/education/EducationStep")
);

const HomeLayout = lazy(() => import("./components/layout/HomeLayout"));
const ResumeLayout = lazy(() => import("./components/layout/ResumeLayout"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen font-bold w-full flex flex-col items-center justify-center">
        <Loader />
        Intelligent CV is loading, Please wait...
      </div>
    );
  }

  return (
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
          <Suspense
            fallback={
              <div className="h-screen w-full flex flex-col items-center justify-center font-semibold">
                <Loader />
                Loading page...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services" element={<Services />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
              </Route>

              <Route path="/dashboard/app/account/login" element={<Login />} />
              <Route
                path="/dashboard/app/account/create"
                element={<Register />}
              />
              <Route
                path="/dashboard/app/account/forgot-password"
                element={<ForgotPassword />}
              />
              <Route
                path="/resume-builder/app/choose-templates"
                element={<ChooseTemplates />}
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

              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/dashboard/me" element={<DashboardProfile />} />
                <Route path="/dashboard/settings" element={<Settings />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ResumeProvider>
    </>
  );
};

export default App;
