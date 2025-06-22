import React from "react";
import CommonTitlePara from "./CommonTitlePara";
import Project from "./Project";
import photo from "/src/assets/photo.png";
import sarthi from "/src/assets/Sarthi-img.png";
import quiz from '/src/assets/Quiz-img.png';

function Projects() {
  return (
    <section id="projects-section">
      <CommonTitlePara
        sectionName="project-overview-container"
        title="PROJECTS"
        tag="h1"
      >
        <p className="commonPara">
          Here, you'll discover a collection of <strong>personal</strong>{" "}
          projects I've developed each one showcasing real-world functionality
          and creative problem-solving. Every project comes with its own{" "}
          <strong>case study</strong>, highlighting the idea behind it, the
          technologies used, and the challenges tackled along the way.
        </p>
      </CommonTitlePara>
      <Project
        title="Quiz Application"
        className="mobile"
        text={
          <p className="commonPara">
            Developed a{" "}
            <strong>cross-platform quiz app using Flutter and Dart</strong>,
            featuring dynamic multiple-choice questions and real-time scoring,
            fully compatible with both Android and iOS devices.
          </p>
        }
        tag="h4"
        img={quiz}
      />
      <Project
        title="Sarthi Blood Bank"
        className="laptop"
        text={
          <p className="commonPara">
            Developed a <strong>web-based blood bank management system</strong>{" "}
            from scratch to efficiently manage information related to{" "}
            <strong>blood donors</strong>,{" "}
            <strong>blood stock inventory</strong>, and{" "}
            <strong>upcoming donation camps</strong>.
          </p>
        }
        tag="h4"
        img={sarthi}
      />
    </section>
  );
}

export default Projects;
