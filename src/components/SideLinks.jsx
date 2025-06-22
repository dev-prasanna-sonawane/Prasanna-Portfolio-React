import React from 'react'
import LogoLinks from './Main Components/LogoLinks';
import { FaGithub, FaTwitter, FaLinkedinIn, FaLinkedin } from "react-icons/fa";

function SideLinks() {
  return (
    <aside id="side-links">
      <LogoLinks
        logo={<FaLinkedin className="logo " color="black" title="LinkedIn" />}
        link="https://linkedin.com/in/prasanna-sonawane"
      />
      <LogoLinks
        logo={<FaTwitter className="logo " color="black" title="Twitter" />}
        link="https://x.com/Prasanna3132003"
      />
      <LogoLinks
        logo={<FaGithub className="logo " color="black" title="GitHub" />}
        link="https://github.com/dev-prasanna-sonawane"
      />
    </aside>
  );
}

export default SideLinks