import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import CommonTitlePara from "./Main Components/CommonTitlePara";
import LogoLinks from "./Main Components/LogoLinks";

function Footer() {
  return (
    <footer>
      <section id="footer-main-container">
        <CommonTitlePara
          sectionName="introduction"
          title="PRASANNA SONAWANE"
          tag="h4"
        >
          <p className="commonPara">
            A Full Stack Web Developer and Flutter Developer with a passion for
            building intuitive digital experiences across web and mobile
            platforms.
          </p>
        </CommonTitlePara>
        <CommonTitlePara sectionName="contact-info" title="Contact Me" tag="h4">
          <div className="contact-info-container">
            <FaEnvelope /> - prasanna.sonawane03@gmail.com <br />
          </div>
          <div className="contact-info-container">
            <FaMobileAlt /> - 8956034888 <br />
          </div>
          <div className="contact-info-container">
            <FaMapMarkerAlt /> - Pune, India
          </div>
        </CommonTitlePara>
        <CommonTitlePara sectionName="social-links" title="Follow Me" tag="h4">
          <LogoLinks
            link="https://linkedin.com/in/prasanna-sonawane"
            logo={<FaLinkedin className="logo" title="LinkedIn" />}
          ></LogoLinks>
          <LogoLinks
            link="https://github.com/dev-prasanna-sonawane"
            logo={<FaGithub className="logo" title="Github" />}
          ></LogoLinks>
          <LogoLinks
            link="https://x.com/Prasanna3132003"
            logo={<FaTwitter className="logo" title="Twitter" />}
          ></LogoLinks>
        </CommonTitlePara>
      </section>
    </footer>
  );
}

export default Footer;
