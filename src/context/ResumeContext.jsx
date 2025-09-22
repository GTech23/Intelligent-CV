import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();
export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personal: {
      fullName: "Admin Addy",
      title: "Database Engineer",
      email: "admin@gmail.com",
      phone: "+2349130327299",
      address: "Port Harcourt, Rivers State",
      linkedin: "https://www.linkedin.com/in/adminaddy",
      website: "https://admin-indol.vercel.app",
      profileImage: "https://example.com/profile.jpg",
      summary:
        "Passionate software engineer with experience in web and backend development.",
    },
    education: [
      {
        school: "University of Example",
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        startDate: { $date: { $numberLong: "1472688000000" } },
        endDate: { $date: { $numberLong: "1590969600000" } },
        description: "Focused on software engineering and data structures.",
      },
    ],
    experience: [
      {
        company: "TechCorp Inc.",
        position: "Frontend Developer",
        startDate: { $date: { $numberLong: "1593561600000" } },
        endDate: { $date: { $numberLong: "1659312000000" } },
        location: "Remote",
        description: "Worked on building and maintaining web applications.",
        highlights: [
          "Developed reusable React components",
          "Improved page load speed by 40%",
          "Collaborated with designers and backend engineers",
        ],
      },
    ],
    skills: ["JavaScript", "Node.js", "React", "MongoDB", "Express"],
    projects: [
      {
        name: "Resume Builder App",
        link: "https://github.com/johndoe/resume-builder",
        description: "A web app that helps users create and download resumes.",
      },
    ],
    certifications: [
      {
        name: "Full-Stack Web Development",
        issuer: "Coursera",
        date: { $date: { $numberLong: "1619827200000" } },
        description:
          "Completed a professional certificate in full-stack development.",
      },
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
  });

  return (
    <ResumeContext value={(formData, setFormData)}>{children}</ResumeContext>
  );
};
