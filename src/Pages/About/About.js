import React from "react";
import Aboutus from "../../Assets/about.png";
import "./About.css";
import divider from "../../Assets/Rectangle 80.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const Teams = () => {
    window.scrollTo(0, 0);
    navigate(`/team`);
  };

  const Careers = () => {
    window.scrollTo(0, 0);
    navigate(`/join`);
  };
  return (
    <div>
      <img src={Aboutus} alt="vriodigitalaboutus" className="bgimg" />
      <div className="text-overlay">
        <h1>
          ABOUT US<span style={{ color: "red" }}>.</span>
        </h1>
      </div>
      
      <div className="about-container">
        <div class="row alignrow">
          <div class="col-auto">
            <img src={divider} alt="vriodigitalaboutus"/>
          </div>
          <div class="col-5">
            <p className="subt2">who are we ?</p>
          </div>
          <div class="col-6">
            <p className="subt3">
              As a leading technology consulting firm, we specialize in driving
              sustainable digital transformation across the utility sector. Our
              expertise spans Waste, Water, Electric, Oil & Gas, enabling us to
              deliver innovative solutions that enhance operational efficiency,
              improve customer experiences and minimize environmental impact.
            </p>
          </div>
        </div>

        <div class="row alignrow">
          <div class="col-auto">
            <img src={divider} alt="vriodigitalaboutus"/>
          </div>
          <div class="col-5">
            <p className="subt2">our mission</p>
          </div>
          <div class="col-6">
            <p className="subt3">
              To deliver exceptional, innovative solutions that set us apart.
              Our meticulous approach empowers clients to achieve outstanding
              results and maintain a competitive edge.
            </p>
          </div>
        </div>
      
      
      
        <div className="whychooseus mb-5">
        <h1 className="about-secondtitle">Why choose</h1>
        <h2 className="t2">VRIO DIGITAL</h2>
        <div class="container1">
          <div class="row">
            <div class="col">
            
              <span className="highlight">end to end capability</span>
            </div>
            <div class="col">
           
              <span className="highlight">innovative technology</span>
            </div>
            <div class="w-100"></div>
            <div class="col mt-3">
           
              <span className="highlight"> expertise and experience</span>
            </div>
            <div class="col mt-3">
              
              <span className="highlight">client-centric approach</span>
            </div>
          </div>
        </div>
        
      </div>
      
      
      </div>

     
    
    
    </div>
  );
};

export default About;
