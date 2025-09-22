import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ChooseTemplates from "./pages/resume/ChooseTemplates";

// Resume Step Imports
import ContactStep from "./pages/resume/steps/ContactStep";
import WorkExperienceStep from "./pages/resume/steps/WorkExperienceStep";
import CertificationStep from "./pages/resume/steps/CertificationStep";
import SkillStep from "./pages/resume/steps/SkillStep";
import SummaryStep from "./pages/resume/steps/SummaryStep";
import ReferenceStep from "./pages/resume/steps/reference/ReferenceStep";

import HomeLayout from "./components/layout/HomeLayout";
import ResumeLayout from "./components/layout/ResumeLayout";

// Context
import { ResumeProvider } from "./context/ResumeContext";
import ResumeFinalize from "./pages/resume/steps/ResumeFinalize";
import ResumeDownload from "./pages/resume/ResumeDownload";
import EducacationStep from "./pages/resume/steps/education/EducationStep";
const App = () => {
  return (
    <>
      <ResumeProvider>
        <BrowserRouter>
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
            <Route path="/dashboard/app/personalize" element={<ResumeLayout />}>
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

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ResumeProvider>
    </>
  );
};

export default App;
