import React from "react";
import Hero from "./Main Components/Hero";
import AboutMe from "./Main Components/AboutMe";
import Projects from "./Main Components/Projects";
import Contact from "./Main Components/Contact";
import "./Main.css";
import SideLinks from "./SideLinks";

function Main() {
  return (
    <main>
       <SideLinks />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
