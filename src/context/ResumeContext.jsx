import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();
export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personal: {
      firstName: "Your",
      lastName: "Name",
      title: "Job title",
      email: "youremail@domain.com",
      phone: "",
      country: "",
      city: "",
      state: "",
      postalCode: "",
      summary: "",
    },
    education: [],
    experience: [],
    skills: [],
    certifications: [],
    references: [],
  });

  return (
    <ResumeContext.Provider value={{ formData, setFormData }}>
      {children}
    </ResumeContext.Provider>
  );
};
