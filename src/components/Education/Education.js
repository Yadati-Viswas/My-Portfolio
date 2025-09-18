// ...existing code...
import React from "react";
import { EducationContainer } from "./EducationElements";

const educationList = [
  {
    institution: "University of North Carolina at Charlotte",
    degree: "Master of Science in Information Technology",
    date: "Jan 2025 - Present",
    location: "Charlotte, USA",
    extras: ["GPA: 4.00 / 4.00"],
  },
  {
    institution: "MGIT",
    degree: "Bachelor of Technology in Information Technology",
    date: "June 2022",
    location: "Hyderabad, India",
    extras: ["Grade: 7.0"],
  },
];

export default function Education() {
  return (
    <EducationContainer id="education" >
      <h2 className="SectionTitle">Education</h2>

      {educationList.map((ed, i) => (
        <div
          key={i}
          className={`item ${i === educationList.length - 1 ? "item-last" : ""}`}
        >
          <div className="content">
            <h3 className="item-title">{ed.institution}</h3>
            <div className="item-meta">{ed.degree}</div>
            {ed.extras && (
              <ul className="resume-list">
                {ed.extras.map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="item-date">
            <div>{ed.date}</div>
            <div style={{ marginTop: 6 }}>{ed.location}</div>
          </div>
        </div>
      ))}
    </EducationContainer>
  );
}