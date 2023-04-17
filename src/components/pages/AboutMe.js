import React from 'react';
import "../../styles/AboutMe.css";
import profileImage from "../../images/profile-image.jpg"

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <h1 className='aboutme-title'>About Me</h1>
      <figure className='profile-image-container'>
        <img
          className="profile-image"
          src={profileImage}
          alt="Siyu Liu Profile image"
        ></img>
      </figure>
      <p className='aboutme-content'>
        My name is Siyu, I live in Sydney and working as an accountant for
        couple of years. I have great passion in programming that's why I'm
        currently seeking for a career change to IT industry in my life. I enjoy
        reading, normally spend hours on it everyday. And walking in the park is
        also a part of my daily routine.
        <br></br>
        <br></br>I am an enthusiastic, self-motivated, reliable, responsible and
        hard working person. I am a mature team worker and adaptable to all
        challenging situations. I am able to work well both in a team
        environment as well as using own initiative. I am able to work well
        under pressure and adhere to strict deadlines.
      </p>
    </div>
  );
}
