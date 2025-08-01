import React from "react";
import ReactDOM from "react-dom/client";
import {
  zeroRightClassName,
  fullWidthClassName,
  noScrollbarsClassName,
} from "react-remove-scroll-bar";
// Import your page components
import "./index.css";
/* slick-carousel default styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
