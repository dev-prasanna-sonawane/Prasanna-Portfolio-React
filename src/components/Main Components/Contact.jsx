import React, { useState } from "react";
import CommonTitlePara from "./CommonTitlePara";
import emailjs from "emailjs-com";

function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        userId
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((error) => {
        alert("Failed to send message, please try again.");
        console.error(error);
      });
  };
  return (
    <section id="contact-section">
      <CommonTitlePara title="CONTACT" tag="h1">
        <p className="commonPara">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </CommonTitlePara>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control input-field"
            value={form.name}
            id="name"
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control input-field"
            value={form.email}
            id="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control input-field"
            value={form.message}
            id="message"
            rows="6"
            placeholder="Enter your Message"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn normal-btn">
          SUBMIT
        </button>
        {submitted && (
          <div className="alert alert-success mt-3" role="alert">
            Thank you for contacting me! I will get back to you soon.
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;
