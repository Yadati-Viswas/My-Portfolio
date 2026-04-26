import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import MyPic from "../../Assets/My_pic.jpeg";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={MyPic}
            alt="Viswas Yadati"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Viswas Yadati</strong>. I am a full stack software engineer with 4+ years of
            experience designing and deploying scalable enterprise and cloud-native applications across Java, Spring,
            React, TypeScript, and AWS ecosystems.
          </div>
          <div className="AboutBio tagline2">
            I focus on reliability, data-driven design, and performance optimization. These are the core technologies
            and tools I actively use.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
