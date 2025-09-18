import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import SocialIcon from "../components/SocialIcon/SocialIcon";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <About />
      <Contact />
      <Footer />
      <SocialIcon />
    </>
  );
}

export default Home;
