import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ChooseTemplates from "./pages/resume/ChooseTemplates";

import ContactStep from "./pages/resume/steps/ContactStep";

import HomeLayout from "./components/layout/HomeLayout";
import ResumeLayout from "./components/layout/ResumeLayout";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>
          <Route path="/dashboard/app/account/login" element={<Login />} />
          <Route path="/dashboard/app/account/create" element={<Register />} />
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
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
