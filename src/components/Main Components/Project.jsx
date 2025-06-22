import React from "react";
import CommonTitlePara from "./CommonTitlePara";
import Button from "./Button";

function Project(props) {
  return (
    <section className="project">
      <img src={props.img} alt="Project Image" className={`project-img ${props.className}`} />

      <CommonTitlePara
        title={props.title}
        tag={props.tag}
        sectionName="project-info-container"
      >
        {props.text}
        <Button text="CASE STUDY" className="small-btn" />
      </CommonTitlePara>
    </section>
  );
}

export default Project;
