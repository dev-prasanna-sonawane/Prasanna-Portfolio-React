import React from "react";

function LogoLinks(props) {
  return (
    <div className="logo-links">
      <a href={props.link} target="_blank" >
        {props.logo}
      </a>
    </div>
  );
}

export default LogoLinks;
