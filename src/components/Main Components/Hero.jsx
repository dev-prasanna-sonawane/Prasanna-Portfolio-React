import React from "react";
import CommonTitlePara from "./CommonTitlePara";
import { FaMapPin } from "react-icons/fa";

function Hero() {
  
  return (
    <>
      <CommonTitlePara
        sectionName="hero"
        title="👋 I'M PRASANNA SONAWANE"
        tag="h1"
      >
        <h3>"Software Developer"</h3>
        <p >
          {<FaMapPin size={15} title="Pune, India"></FaMapPin>}"Pune,India"
        </p>
        <a
          href="/Prasanna_Sonawane_Resume.pdf"
          download="Prasanna-Sonawane-Resume"
          className="btn large-btn"
          t
        >
          RESUME
        </a>
      </CommonTitlePara>
    </>
  );
}

export default Hero;
