import React from "react";
import {ExperienceContainer } from "./ExperienceElements";

const experiences = [
  {
    company: "LPL Financial (Eidiko)",
    role: "Full Stack Engineer",
    location: "United States",
    date: "Mar 2025 - Current",
    bullets: [
      "Designed and built SPA user interfaces using React 18, Redux, HTML5, CSS3, and Express.js.",
      "Developed reusable React components with forms, events, router workflows, and animations for scalable feature delivery.",
      "Integrated frontend state management with Redux action creators and reducers to support rich user interactions.",
      "Used Axios-based API integration to fetch backend data and synchronize application state across modules.",
      "Built and integrated Node.js and Express.js backend microservices with RESTful API design and secure authentication flows.",
      "Applied JWT middleware and Passport-based authorization for secure access control.",
      "Worked extensively with AWS services including EC2, S3, Elastic Beanstalk, ELB, RDS, VPC, Route 53, CloudWatch, CloudFormation, IAM, and SNS.",
      "Installed and operated applications on AWS EC2 instances while configuring storage workflows with S3 buckets.",
      "Used Test-Driven Development (TDD) practices with Jasmine and Karma to strengthen release quality.",
    ],
  },
  {
    company: "Ericsson (Tata Consultancy Services)",
    role: "Java Full Stack Developer",
    location: "Hyderabad, India",
    date: "Nov 2021 - Dec 2024",
    bullets: [
      "Developed and maintained enterprise applications using Java, J2EE, Spring, CDI, and microservices architecture.",
      "Migrated JBoss EAP 6.x to 7.4 and upgraded Spring Framework to 5.3.40, improving startup performance by 31%.",
      "Designed and implemented RESTful backend services for distributed enterprise workflows.",
      "Implemented scalable event-driven systems processing 4-6 million events per day with high availability and low latency.",
      "Improved CI/CD performance by removing redundant modules, reducing RPM package size by 21%.",
      "Built rich frontend modules using AngularJS, JavaScript (ES6+), HTML5, CSS3, JSP, JSTL, AJAX, and jQuery.",
      "Enhanced data performance with PostgreSQL and Hibernate while leveraging Neo4j for intelligent fault correlation.",
      "Deployed and managed cloud-native services on AWS (EC2, ECS, S3, EKS, DynamoDB) and OpenShift using Docker and Kubernetes.",
      "Automated deployment tasks with shell scripting and integrated pipelines with Jenkins, reducing manual deployment delays by about 30-40%.",
      "Led root cause analysis, Linux log diagnostics (SUSE/RHEL), and production support, improving stability and response times by 20%.",
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
