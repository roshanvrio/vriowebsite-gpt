// Header.js
import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./Header.css"; // Custom CSS for additional styling
import VrioLogo from "../Assets/VrioLogo.png";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const expoPaths = [
    "/vrioedge",
    "/container-tracking",
    "/sales-growth",
    "/customer-management",
    "/process-automation",
    "/wasteanalyticsplatform"
  ];
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <NavLink to="/" className="navbar-brand">
                <img src={VrioLogo} alt="vriodigitallogo" className="logo" />
              </NavLink>
            </div>

            <div className="nav-container">

            <NavLink
  to="/vrioedge"
  className={`nav-link ${expoPaths.includes(location.pathname) ? "active" : ""}`}
>
  WASTE EXPO 2025
</NavLink>


              <NavLink to="/home" className="nav-link" activeClassName="active">
                HOME
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                ABOUT US
              </NavLink>
              <NavLink
                to="/industries"
                className="nav-link"
                activeClassName="active"
              >
                INDUSTRIES
              </NavLink>
              <div
                className="dropdown"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <NavLink
                  to="/solutions"
                  className="nav-link"
                  activeClassName="active"
                >
                  SOLUTIONS
                </NavLink>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <NavLink
                      to="/solutions/consulting"
                      className="dropdown-item"
                    >
                      Consulting
                    </NavLink>
                    <NavLink
                      to="/solutions/customer-experience"
                      className="dropdown-item"
                    >
                      Customer Experience
                    </NavLink>
                    <NavLink
                      to="/solutions/robotic-process-automation"
                      className="dropdown-item"
                    >
                      Robotic Process Automation
                    </NavLink>
                    <NavLink
                      to="/solutions/integration"
                      className="dropdown-item"
                    >
                      Integration
                    </NavLink>
                    <NavLink to="/solutions/data-ai" className="dropdown-item">
                      Data & AI
                    </NavLink>
                    <NavLink
                      to="/solutions/asset-management"
                      className="dropdown-item"
                    >
                      Asset Management
                    </NavLink>
                    <NavLink
                      to="/solutions/work-management"
                      className="dropdown-item"
                    >
                      Work Management
                    </NavLink>
                    <NavLink to="/solutions/gis" className="dropdown-item">
                      GIS
                    </NavLink>
                    <NavLink
                      to="/solutions/fleet-management"
                      className="dropdown-item"
                    >
                      Fleet Management
                    </NavLink>
                    <NavLink
                      to="/solutions/transportation-solutions"
                      className="dropdown-item"
                    >
                      Transportation Solutions
                    </NavLink>
                    <NavLink
                      to="/solutions/tracking-solutions"
                      className="dropdown-item"
                    >
                      Tracking Solutions
                    </NavLink>
                  </div>
                )}
              </div>
              {/* <NavLink to="/team" className="nav-link" activeClassName="active">
                OUR TEAM
              </NavLink> */}
              <NavLink to="/join" className="nav-link" activeClassName="active">
                JOIN US
              </NavLink>
              {/* <NavLink to="/vrioedge" className="nav-link" activeClassName="active">
                EXPO
              </NavLink> */}
              {/* <NavLink to="/container-tracking" className="nav-link" activeClassName="active">
                EXPO
              </NavLink> */}
          
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
