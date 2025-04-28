import React from "react";
import ElectricUtilities from "../../Assets/sliderimg/ElectricUtilities_v04.png";
import EnergyManagement from "../../Assets/sliderimg/EnergyManagement.png";
import OilGas from "../../Assets/sliderimg/Oil&Gas.png";
import WaterandWasteWaterUtilities from "../../Assets/sliderimg/WaterandWasteWaterUtilities.png";
import WaterUtilities from "../../Assets/sliderimg/WaterUtilities.png";
import HomeContent from "../../ContentDisplay/HomePage/Homecontent";
import ReadMore from "../../Assets/sliderimg/ReadMore.png";

import { useNavigate } from "react-router-dom";
import "./Home.css";


const sliderImages = [
  {
    src: WaterandWasteWaterUtilities,
    defaultText: "HAZARDOUS WASTE MANAGEMENT",
    overlayText:
      "Proper management and treatment of wastewater are essential to protect public health, the environment, and water resources.",
  },
  {
    src: WaterUtilities,
    defaultText: "WATER UTILITIES",
    overlayText:
      "Water utilities are essential for delivering safe drinking water, managing wastewater, and ensuring the sustainable use of water resources.",
  },
  {
    src: EnergyManagement,
    defaultText: "ENERGY MANAGEMENT",
    overlayText:
      "The energy management sector focuses on the production distribution, and efficient use of energy",
  },
  {
    src: OilGas,
    defaultText: "OIL & GAS",
    overlayText:
      "These utilities play a vital role in providing the energy necessary for various sectors, including residential, commercial, industrial, and transportation.",
  },
  {
    src: ElectricUtilities,
    defaultText: "ELECTRIC UTILITIES",
    overlayText:
      "Electric utilities are organizations that generate, transmit, and distribute electricity to consumers, including residential, commercial, and industrial customers.",
  },
  {
    src: ReadMore,
    // defaultText: "ELECTRIC UTILITIES",
    // overlayText:
    //   "Electric utilities are organizations that generate, transmit, and distribute electricity to consumers, including residential, commercial, and industrial customers.",
    isClickable: true,
    },
 
  
];

const Home = () => {
  const navigate = useNavigate();

  // const handleSubmit = () => {
  //   window.scrollTo(0, 0);
  //   navigate('/industries');
  // };

  const handleClick = (item) => {
    if (item.isClickable) {
      window.scrollTo(0, 0);
      navigate("/industries"); // Replace with the desired route
    }
  };


  return (
    <div>
      <HomeContent />
     
      <div className="home-container">
        <div className="text-container">
          <h1>Industries</h1>
        </div>
        <div className="slider-container">
          <div className="slider-wrapper">
           
                <div className="container">
                  <div className="row">
              {sliderImages.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-4 col-sm-4 col-12 mb-4 grid-item"  onClick={() => handleClick(item)} // Add click handler here
                style={{ cursor: item.isClickable ? "pointer" : "default" }}
              >
                  <div className="zoom-wrapper">
                    <img src={item.src} alt={`Slider Image ${index + 1}`} />
                    {/* <div className="default-text">{item.defaultText}</div> */}
                    <div className="overlay">
                      {/* <button className="read-more-button" onClick={handleSubmit}>
                        Read More
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            
            
            </div>
            </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
