import React from "react";
import "./Loading.css"; // Import the CSS for styling the spinner

const Loading = () => (
  <div className="loading-container">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

export default Loading;
