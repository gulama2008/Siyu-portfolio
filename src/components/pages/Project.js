import React, { useState } from "react";
import github from "../../images/github.png"
import "../../styles/Project.css";

export default function Project(props) {
  const [mouseInContainer, setMouseInContainer] = useState(false);
  const [mouseInLink, setMouseInLink] = useState(false);
  const [mouseInGithub, setMouseInGithub] = useState(false);
  const { name, deployLink, githubLink, desc, image } = props.projectAttributes;
  
  const handleMouseEnterContainer = () => {
    setMouseInContainer(true);
  }
  const handleMouseLeaveContainer = () => {
    setMouseInContainer(false);
  };

  const handleMouseEnterLink = () => {
    setMouseInLink(true);
  };
  const handleMouseLeaveLink = () => {
    setMouseInLink(false);
  };

  const handleMouseEnterGithub = () => {
    setMouseInGithub(true);
  };
  const handleMouseLeaveGithub = () => {
    setMouseInGithub(false);
  };
console.log(image);
  return (
    <div
      className="project-container"
      // style={{ backgroundImage: `url(${image})`,backgroundSize:"100%,100%" }}
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
    >
      <img
        src={image}
        className="project-img"
        style={
          mouseInContainer
            ? { opacity: 0.1, transition: "0.5s" }
            : { opacity: 1, transition: "0.3s" }
        }
      ></img>
      <div
        className="project-links"
        style={
          mouseInContainer
            ? { opacity: 0.9, transition: "0.5s" }
            : { opacity: 0, transition: "0.3s" }
        }
      >
        <a
          className="project-anchor"
          href={deployLink}
          target="_blank"
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          style={
            mouseInLink ? { opacity: 1, transition: "0.2s" } : { opacity: 0.6 }
          }
        >
          <p className="project-name">{name}</p>
        </a>
        <a
          href={githubLink}
          target="_blank"
          onMouseEnter={handleMouseEnterGithub}
          onMouseLeave={handleMouseLeaveGithub}
          style={
            mouseInGithub
              ? { opacity: 1, transition: "0.2s" }
              : { opacity: 0.6 }
          }
        >
          <img src={github} className="github-img"></img>
        </a>
      </div>
      <p
        className="project-desc"
        style={
          mouseInContainer
            ? { opacity: 0.6, transition: "0.5s" }
            : { opacity: 0, transition: "0.3s" }
        }
      >
        {desc}
      </p>
    </div>
  );
}
