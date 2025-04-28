import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const sendGridUrl = "https://api.sendgrid.com/v3/mail/send";

    const SENDGRID_API_KEY = "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"; // Replace with your SendGrid API key
    const SENDGRID_EMAIL = "contact@vriodigital.com"; // Replace with your verified sender email

    const emailData = {
      personalizations: [
        {
          to: [
            {
              email: "data@yopmail.com", // Replace with recipient email
            },
          ],
          subject: "New Contact Form Submission",
        },
      ],
      from: {
        email: SENDGRID_EMAIL,
      },
      content: [
        {
          type: "text/plain",
          value: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        },
      ],
    };

    try {
      const response = await axios.post(`${proxyUrl}${sendGridUrl}`, emailData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
        },
      });

      if (response.status === 202) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error.response?.data || error.message);
      toast.error("Failed to send your message. Please try again.");
    }
  };

  return (
    <div className="join-us-container">
      {/* Left Section */}
      <div className="left-container">
        <h1>Start Strong with the Right Support</h1>
        <p>
          Share your priorities, and weâ€™ll connect you with a knowledgeable team
          member to support your journey. Together, we can make great decisions!
        </p>
      </div>

      {/* Right Section */}
      <div className="right-container">
        <h2 style={{ color: "white" }}>Contact Us</h2>
        <form onSubmit={handleSubmit} className="join-us-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JoinUs;