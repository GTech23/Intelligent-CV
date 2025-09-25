import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();
export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personal: {
      photoUrl: "https://myphotocom.com/abds",
      firstName: "Admin",
      lastName: "Addy",
      title: "Database Engineer",
      email: "admin@gmail.com",
      phone: "+2349130327299",
      country: "Nigeria",
      city: "Port Harcourt",
      state: "Rivers State",
      postalCode: "50012",
      linkedin: "https://www.linkedin.com/in/adminaddy",
      website: "https://admin-indol.vercel.app",
      profileImage: "https://example.com/profile.jpg",
      summary:
        "Passionate software engineer with experience in web and backend development.",
    },
    education: [
      {
        school: "University of Port Harcourt",
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        graduationMonth: "January",
        graduationYear: "2013",
        removeGraduationDate: false,
        location: "Washington DC",
      },
    ],
    experience: [
      {
        company: "TechCorp Inc.",
        position: "Frontend Developer",
        startMonth: "September",
        startYear: "2021",
        endMonth: "June",
        country: "United Kingdom",
        province: "New York",
        city: "St Marys",
        endYear: "2025",
        isCurrentlyWorking: false,
        responsibilities: [
          "Developed reusable React components",
          "Improved page load speed by 40%",
          "Collaborated with designers and backend engineers",
        ],
      },
    ],
    skills: ["JavaScript", "Node.js", "React", "MongoDB", "Express"],

    certifications: [
      "Certificate in Entreprenuership",
      "Certificate in Sales & Marketing",
    ],
    languages: [
      {
        name: "English",
        level: "Fluent",
      },
      {
        name: "French",
        level: "Intermediate",
      },
    ],

    references: [
      {
        firstName: "John",
        lastName: "Doe",
        company: "Google LCC",
        jobTitle: "Backend Engineer",
        email: "johndoe@domain.com",
        phone: "01234569045",
        relationshipStatus: "friend",
      },
    ],
  });

  return (
    <ResumeContext.Provider value={{ formData, setFormData }}>
      {children}
    </ResumeContext.Provider>
  );
};
