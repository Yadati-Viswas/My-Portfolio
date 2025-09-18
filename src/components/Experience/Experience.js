import React from "react";
import {ExperienceContainer } from "./ExperienceElements";

const experiences = [
  {
    company: "Tata Consultancy Services - Full Time",
    role: "Software Engineer",
    location: "Hyd, India",
    date: "Dec 2022 - Jan 2025",
    bullets: [
      "Successfully uplifted JBoss EAP to 7.4 and migrated Spring Framework to version 5.3.40 and JSF to 3.0, enhancing application start-up performance by 14% for a client-facing platform.",
      "Led the deployment of the application to the cloud environment, removing unwanted modules to reduce RPM size from 328 MB to 296 MB, improving deployment efficiency.",
      "Implemented geo-replication features and contributed to the introduction of various other enhancements, improving overall functionality.",
    ],
  },
  {
    company: "Mindtree Ltd - Internship",
    role: "Software Intern",
    location: "Remote",
    date: "June 2022 - November 2022",
    bullets: [
      "Developed a full-stack application using Spring Boot and ReactJS as part of intern training.",
    ],
  },
];

export default function Experience() {
  return (
    <ExperienceContainer id="experience" >
      <h2 className="SectionTitle">Experience</h2>

      {experiences.map((exp, i) => (
        <div
          key={i}
          className={`item ${i === experiences.length - 1 ? "item-last" : ""}`}
        >
          <div className="content">
            <h3 className="item-title">{exp.company}</h3>
            <div className="item-meta">
              {exp.role} — {exp.location}
            </div>
            <ul className="resume-list">
              {exp.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="item-date">{exp.date}</div>
        </div>
      ))}
    </ExperienceContainer>
  );
}