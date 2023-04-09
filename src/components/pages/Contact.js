import React from 'react';
import "../../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <form>
        <div className="form-group">
          <label className="form-label" for="contact-name">
            Name:
          </label>
          <input type="text" id="contact-name" className="form-control"></input>
        </div>
        <div className="form-group">
          <label className="form-label" for="contact-email">
            Email Address:
          </label>
          <input
            type="email"
            id="contact-email"
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label" for="contact-message">
            Message:
          </label>
          <textarea
            type="text"
            id="contact-message"
            className="form-control"
            rows={5}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary form-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
