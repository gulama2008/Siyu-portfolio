import React from 'react';
import "../styles/Navigation.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar">
      <li className="navbar-list-item">
        <a
          className={
            currentPage === "AboutMe" ? "navbar-link-active" : "navbar-link"
          }
          href="#AboutMe"
          onClick={() => handlePageChange("AboutMe")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          // className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="navbar-list-item">
        <a
          className={
            currentPage === "Portfolio" ? "navbar-link-active" : "navbar-link"
          }
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={
          //   currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          // }
        >
          Portfolio
        </a>
      </li>
      <li className="navbar-list-item">
        <a
          className={
            currentPage === "Contact" ? "navbar-link-active" : "navbar-link"
          }
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="navbar-list-item">
        <a
          className={
            currentPage === "Resume" ? "navbar-link-active" : "navbar-link"
          }
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
