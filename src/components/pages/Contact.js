import React, { useState } from 'react';
import "../../styles/Contact.css";

export default function Contact() {
  //set state isEmailValid to conditionally render the error message if the state is false
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const nameValidation = (event) => { 
    if (!event.target.value) {
      setIsNameValid(false);
    } else { 
      setIsNameValid(true);
    }
  }
  //handle email input validation and set the state isEmailValid to false if email format is not valid
  const emailValidation = (event) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!event.target.value.match(validRegex)) {
      setIsEmailValid(false);
    } else { 
      setIsEmailValid(true);
    }
  }

  const messageValidation = (e) => { 
    if (!e.target.value) {
      setIsMessageValid(false)
    } else { 
      setIsMessageValid(true)
    }
  }

  const handleSubmit = (event) => { 
    event.preventDefault();
    
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">
            Name:
          </label>
          <input
            type="text"
            id="contact-name"
            className="form-control"
            onBlur={nameValidation}
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">
            Email Address:
          </label>
          <input
            type="email"
            id="contact-email"
            className="form-control"
            onBlur={emailValidation}
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-message">
            Message:
          </label>
          <textarea
            type="text"
            id="contact-message"
            className="form-control"
            rows={5}
            onBlur={messageValidation}
          ></textarea>
        </div>
        {isNameValid ? (
          <div></div>
        ) : (
          <div className="error-message">* Name is required</div>
        )}
        {isEmailValid ? (
          <div></div>
        ) : (
          <div className="error-message">* Your email is invalid</div>
        )}
        {isMessageValid ? (
          <div></div>
        ) : (
          <div className="error-message">* Message is required</div>
        )}
        <button
          type="button"
          className="btn btn-primary form-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
