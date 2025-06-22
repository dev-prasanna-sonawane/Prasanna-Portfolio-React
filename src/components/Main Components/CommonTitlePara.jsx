import React from "react";

function CommonTitlePara(props) {
  return (
    <section id={props.sectionName}>
      {React.createElement(props.tag, null, props.title)}
      {props.children}
    </section>
  );
}

export default CommonTitlePara;
