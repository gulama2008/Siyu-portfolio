import React from 'react';

export default function Resume() {
  return (
    <div className='resume-container'>
      <h1>Resume</h1>
      <div>
        Download my
        <a
          href="https://drive.google.com/file/d/1cTeGbKT-JMZPcPLV7SBE6zdN3bDHtrl8/view?usp=sharing"
          download="Siyu Liu Resume"
          target="_blank"
        >
          {" "}
          resume
        </a>
      </div>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Responsive Design</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL Sequelize.js</li>
        <li>MongoDB Mongoose</li>
        <li>RESTful APIs</li>
        <li>GraghQL</li>
        <li>MVC</li>
      </ul>
    </div>
  );
}
