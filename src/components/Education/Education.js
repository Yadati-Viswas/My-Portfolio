// ...existing code...
import React from "react";
import { EducationContainer } from "./EducationElements";

const educationList = [
  {
    institution: "University of North Carolina at Charlotte",
    degree: "Master of Science in Information Technology",
    location: "Charlotte, North Carolina",
    extras: [
      "Graduate program focused on software engineering, cloud-native architecture, and scalable systems.",
    ],
  },
  {
    institution: "MGIT (JNTU Affiliated)",
    degree: "Bachelor of Technology in Information Technology",
    location: "Hyderabad, India",
    extras: [
      "Built strong foundations in software engineering, data structures, and database systems.",
    ],
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
            <div className="item-meta">
              {ed.degree} — {ed.location}
            </div>
            {ed.extras && (
              <ul className="resume-list">
                {ed.extras.map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </EducationContainer>
  );
}
