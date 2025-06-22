import React from "react";
import CommonTitlePara from "./CommonTitlePara";
import Button from "./Button";
import Skill from "./Skill";

function AboutMe() {
  return (
    <>
      <CommonTitlePara
        sectionName="about-me-section"
        title="About Me"
        tag="h1"
      >
          <p className='commonPara'>
            Here, you'll get a closer look at <strong>who I am</strong>,{" "}
            <strong>what I do</strong>,{" "}
            <strong>the skills I bring to the table</strong> and with a focus on
            programming, full stack web development, and mobile app creation.
          </p>
        <section id="about-me-container">
          <CommonTitlePara
            sectionName="get-to-know-me"
            title="Get to know me!"
            tag="h4"
          >
              <p className='commonPara'>
                I'm a creative and dedicated{" "}
                <strong>Full Stack Web Developer</strong> and{" "}
                <strong>Flutter Developer</strong> who enjoys building seamless
                digital experiences from the ground up. Whether it's crafting
                responsive frontends with <strong>HTML, CSS/Bootstrap</strong>,
                and <strong>JavaScript</strong>, or developing powerful backends
                using <strong>PHP</strong> and <strong>MySQL</strong>, I love
                every part of bringing ideas to life on the web. <br />
                In the mobile world, I specialize in Flutter development using{" "}
                <strong>Dart</strong> creating smooth, engaging apps that work
                like a charm. I find joy in both pixels and logic—whether it's
                styling a UI element or debugging a database query. I’m
                constantly learning, exploring new tools, and seeking projects
                that challenge me to grow. I believe great development starts
                with curiosity and thrives on collaboration.
                <br />
                Check out some of my work in the <strong>Projects</strong> section. Feel free to <strong>Connect</strong> or Follow me on
                my Linkedin. I'm <strong>open to Job opportunities </strong>
                where I can contribute, learn and grow. If you have a good
                opportunity that matches my skills and experience then don't
                hesitate to contact me."
              </p>
            <Button link="#contact-section" text="CONTACT" className="small-btn" />
          </CommonTitlePara>
          <CommonTitlePara sectionName="my-skills" title="My Skills" tag="h4">
            <section id="skills-container">
              <Skill skillName="HTML" />
              <Skill skillName="CSS" />
              <Skill skillName="JavaScript" />
              <Skill skillName="React Js" />
              <Skill skillName="PHP" />
              <Skill skillName="Java" />
              <Skill skillName="Dart" />
              <Skill skillName="Flutter" />
              <Skill skillName="GIT" />
              <Skill skillName="Github" />
            </section>
          </CommonTitlePara>
        </section>
      </CommonTitlePara>
    </>
  );
}

export default AboutMe;
