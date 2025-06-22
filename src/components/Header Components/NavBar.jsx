import React from "react";
import NavLinks from "./NavLinks";
import photo from "/src/assets/photo.png";
import {Link} from 'react-router';

function NavBar() {
  return (
    <nav id="navbar">
      <div>
        <img
          src={photo}
          alt="Profile Photo"
          height="40px"
          width="40px"
          style={{ borderRadius: 19 }}
        />
        <Link to="/" className="nav-links">
          PRASANNA SONAWANE
        </Link>
      </div>
      <div>
        <Link to="/" className="nav-links" >
          HOME
        </Link>
        <NavLinks title="ABOUT" link="#about-me-section" />
        <NavLinks title="PROJECTS" link="#projects-section" />
        <NavLinks title="CONTACT" link="#contact-section" />
        {/* <Link to="/profile" className="nav-links">
          PROFILE
        </Link> */}
      </div>
    </nav>
  );
}

export default NavBar;