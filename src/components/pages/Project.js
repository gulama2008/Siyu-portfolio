import React from "react";
import github from "../../images/github.png"
import "../../styles/Project.css";

export default function Project(props) {
  const { name, deployLink, githubLink,desc, image } = props.projectAttributes;
  return (
    <div
      className="project-container" style={{ backgroundImage: `url(${image})` }}>
      <div className="project-links">
        <a href={deployLink} target="_blank">
          <p className="project-name">{name}</p>
        </a>
        <a href={githubLink} target="_blank">
          <img src={github} className="github-img"></img>
        </a>
      </div>
      <p className="project-desc">{desc}</p>
    </div>
  );
}
