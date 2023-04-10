import React, { useState } from 'react';
import Project from './Project';
import movie from '../../images/movie.jpg'
import dog from "../../images/dog.png";
import "../../styles/Portfolio.css";


export default function Portfolio() {
  const [projects, setProjects] = useState([
    {
      name: "Movie Search Engine",
      deployLink: "https://gulama2008.github.io/Movie-Search-Engine/",
      githubLink: "https://github.com/gulama2008/Movie-Search-Engine",
      desc: "JavaScript/HTML/CSS/API",
      image: { movie },
    },
    {
      name: "Furry Foster Home",
      deployLink: "https://mighty-ridge-85314.herokuapp.com/",
      githubLink: "https://github.com/gulama2008/Furry-Foster-Home",
      desc: "Node/Express/MySQL/HTML/CSS/JS",
      image: { dog },
    },
    {
      name: "Tech Blog",
      deployLink: "https://nameless-coast-74044.herokuapp.com/",
      githubLink: "https://github.com/gulama2008/cms-style-blog",
      desc: "Node/JavaScript/CSS/MySQL",
      image: { movie },
    },
  ]);

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="portfolio-projects">
        {projects.map((project) => {
          return (
            <Project projectAttributes={project} className="portfolio-item" />
          );
        })}
      </div>
    </div>
  );
}
