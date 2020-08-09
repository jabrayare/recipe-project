import React from "react";
import "./Contact.css";

function Form() {
  return (
    <div className="form-card">
      <h1 className="form-header">
        Please fill out this from, We get back to you as soon as we can.
      </h1>
      <form className="form-group">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="form-name"
          name="name"
        />
        <input
          type="email"
          className="form-email"
          placeholder="Enter Your Email"
          name="email"
        />
        <textarea
          type="text"
          className="form-textArea"
          name="textArea"
          placeholder="Your Message"
        />
        <button type="submit" name="submit" className="form-btn">
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default Form;
