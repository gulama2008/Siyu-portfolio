import React from "react";
import movie from '../../images/movie.jpg'
import dog from "../../images/dog.png";

export default function Project() {
  return (
    <div>
      <div>
        <a
          href="https://gulama2008.github.io/Movie-Search-Engine/"
          target="_blank"
        >
          <img src={movie} alt="Movie Search Engine"></img>
          <div>
            <h3>Movie Search Engine</h3>
            <p>JavaScript/HTML/CSS/Web API</p>
          </div>
        </a>
      </div>
      <div>
        <a href="https://mighty-ridge-85314.herokuapp.com/" target="_blank">
          <img src={dog} alt="Furry Foster Home"></img>
          <div>
            <h3>Furry Foster Home</h3>
            <p>JavaScript/HTML/CSS/Web API</p>
          </div>
        </a>
      </div>
      <div>
        <a href="https://nameless-coast-74044.herokuapp.com/" target="_blank">
          <img src={dog} alt="Tech Blog"></img>
          <div>
            <h3>Tech Blog</h3>
            <p>JavaScript/HTML/CSS/Web API</p>
          </div>
        </a>
      </div>
      <a
        href="https://gulama2008.github.io/Movie-Search-Engine/"
        target="_blank"
      >
        <img src={movie} alt="Movie Search Engine"></img>
        <div>
          <h3>Movie Search Engine</h3>
          <p>JavaScript/HTML/CSS/Web API</p>
        </div>
      </a>
      <a
        href="https://gulama2008.github.io/Movie-Search-Engine/"
        target="_blank"
      >
        <img src={movie} alt="Movie Search Engine"></img>
        <div>
          <h3>Movie Search Engine</h3>
          <p>JavaScript/HTML/CSS/Web API</p>
        </div>
      </a>
      <a
        href="https://gulama2008.github.io/Movie-Search-Engine/"
        target="_blank"
      >
        <img src={movie} alt="Movie Search Engine"></img>
        <div>
          <h3>Movie Search Engine</h3>
          <p>JavaScript/HTML/CSS/Web API</p>
        </div>
      </a>
    </div>
  );
}
