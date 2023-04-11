import React, { useState } from 'react';
import Project from './Project';
import movie from '../../images/movie.jpeg'
import pet from "../../images/pet.jpeg";
import blog from "../../images/blog.jpeg";
import weather from "../../images/weather.jpeg";
import note from "../../images/note.webp";
import "../../styles/Portfolio.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Portfolio() {
  const [projects, setProjects] = useState([
    {
      name: "Movie Search Engine",
      deployLink: "https://gulama2008.github.io/Movie-Search-Engine/",
      githubLink: "https://github.com/gulama2008/Movie-Search-Engine",
      desc: "JavaScript/HTML/CSS/API",
      image: movie,
    },
    {
      name: "Furry Foster Home",
      deployLink: "https://mighty-ridge-85314.herokuapp.com/",
      githubLink: "https://github.com/gulama2008/Furry-Foster-Home",
      desc: "Node/Express/MySQL/HTML/CSS/JS",
      image: pet,
    },
    {
      name: "Tech Blog",
      deployLink: "https://nameless-coast-74044.herokuapp.com/",
      githubLink: "https://github.com/gulama2008/cms-style-blog",
      desc: "Node/JavaScript/CSS/MySQL",
      image: blog,
    },
    {
      name: "Weather Dashboard",
      deployLink: "https://gulama2008.github.io/weather-dashboard/",
      githubLink: "https://gulama2008.github.io/weather-dashboard/",
      desc: "HTML/CSS/JS/Web APIs",
      image: weather,
    },
    {
      name: "Note Taker",
      deployLink: "https://agile-temple-11022.herokuapp.com/",
      githubLink: "https://github.com/gulama2008/note-taker",
      desc: "Node/Express/HTML/CSS/JS",
      image: note,
    },
  ]);

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfolio</h1>

      <Container className="portfolio-projects">
        <Row>
          {projects.map((project) => {
            return (
              <Col xs={12} md={6}>
                <Project
                  projectAttributes={project}
                  className="portfolio-item"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
