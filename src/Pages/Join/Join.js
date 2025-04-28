import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; 
import "./Join.css";

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
    // const proxyUrl = "https://cross-origin-yvjg.onrender.com/";
    const sendGridUrl = "https://api.mailersend.com/v1/email ";
    // const SENDGRID_API_KEY = "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"; 
    const SENDGRID_API_KEY = "mlsn.ccc52eaacc040d6a69f462757734d2ba4b6a660a2a5ca34b4a9f42836d7b3916"; 
    const SENDGRID_EMAIL = "contact@vriodigital.com"; 

    const emailData = {
      personalizations: [
        {
          to: [
            {
              email: "contact@vriodigital.com",
            }
          ], // Replace with recipient email
          subject: "New Contact Form Submission",
        },
      ],
      from: {
        email: SENDGRID_EMAIL,
      },
      content: [
        {
          type: "text/html",
          value: `
            <html>
              <head>
                <style>
                  body {
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f5f6fa;
                    color: #333;
                  }
                  .email-container {
                    max-width: 700px;
                    margin: 30px auto;
                    background: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    border: 1px solid #dcdcdc;
                  }
                  .header {
                    background-color: #2c3e50;
                    color: #ffffff;
                    text-align: center;
                    padding: 20px;
                    font-size: 24px;
                    font-weight: bold;
                  }
                  .content {
                    padding: 20px;
                    line-height: 1.6;
                  }
                  .content p {
                    margin: 10px 0;
                    font-size: 16px;
                  }
                  .info-box {
                    margin: 20px 0;
                    background: #f9f9f9;
                    border-left: 6px solid #3498db;
                    padding: 15px 20px;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #2c3e50;
                  }
                  .info-box span {
                    font-weight: bold;
                    color: #3498db;
                    display: block;
                    margin-bottom: 5px;
                  }
                  .footer {
                    background-color: #f1f1f1;
                    color: #7f8c8d;
                    text-align: center;
                    padding: 15px;
                    font-size: 14px;
                    border-top: 1px solid #e5e5e5;
                  }
                  .footer a {
                    color: #3498db;
                    text-decoration: none;
                  }
                  .footer a:hover {
                    text-decoration: underline;
                  }
                </style>
              </head>
              <body>
                <div class="email-container">
                  <!-- Header Section -->
                  <div class="header">
                    New Business Inquiry
                  </div>
                  
                  <!-- Content Section -->
                  <div class="content">
                    <p>Dear Team,</p>
                    <p>We have received a new business inquiry from the contact form on your website. Below are the details:</p>
                    
                    <!-- User Information -->
                    <div class="info-box">
                      <span>Name:</span>
                      ${formData.name}
                    </div>
                    <div class="info-box">
                      <span>Email:</span>
                      ${formData.email}
                    </div>
                    <div class="info-box">
                      <span>Message:</span>
                      ${formData.message}
                    </div>
                    
                    <p>Please follow up with the user as soon as possible to discuss their inquiry further.</p>
                    <p>Best regards,</p>
                    <p>Your Team</p>
                  </div>
                  
                  <!-- Footer Section -->
                  <div class="footer">
                    <p>This email was generated automatically from your website's contact form.</p>
                    <p>If you have any questions, contact us at <a href="mailto:support@vriodigital.com">support@vriodigital.com</a>.</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        },
      ],
      
      
      
      
    };

    try {
      const response = await axios.post(`${proxyUrl}${sendGridUrl}`, emailData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          // 'Referer': 'http://localhost:3000/'
        },
      });

      console.log('API response001',response)
      console.log('API response002',emailData)
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
      <div className="left-container">
        <h1>Start Strong with the Right Support</h1>
        <p>
          Share your priorities, and we’ll connect you with a knowledgeable team
          member to support your journey. Together, we can make great decisions!
        </p>
      </div>

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
