import React, { useState, useEffect } from "react";
import "./Industries.css";
import IndustryMain from "../../Assets/Industry/Industry001.png";
import { IndustryInfo } from "../../Scripts/indurstry";
import { useParams, useNavigate } from "react-router-dom";

const Industry = () => {
  const { card } = useParams();
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const cardIndex = {
    hazardouswastemanagement: 0,
    waterutilities: 1,
    energymanagement: 2,
    oilgas: 3,
    electricutilities: 4,
  };
  useEffect(() => {
    console.log("card", card);
    if (typeof card !== "undefined") {
      const industryIndex = parseInt(cardIndex[card]);
      if (!isNaN(industryIndex)) {
        setSelectedIndustry(industryIndex);
      } else {
        navigate(`*`);
      }
    }
  }, []);

  const handleReadMore = (industry) => {
    navigate(`/industries/${industry}`);
    const index = parseInt(cardIndex[industry]);
    setSelectedIndustry(index);
  };

  const handleBack = () => {
    navigate(`/industries`);
    setSelectedIndustry(null);
  };

  return (
    <div className="industryContainer">
      <div>
        <img src={IndustryMain} alt="IndustryMain" className="bgimg" />
      </div>
      <div className="home-container">
        <div className="text-overlay">
          <h1>
            INDUSTRIES<span style={{ color: "red" }}>.</span>
          </h1>
        </div>
        <div className="static-grid">
          {selectedIndustry === null ? (
            // Show all grid items when no specific industry is selected
            IndustryInfo.map((item, index) => (
              <div key={index} className="grid-item">
                <div className="zoom-wrapper">
                  <img src={item.src} alt={item.defaultText} />
                  {/* <div className="default-text">{item.defaultText}</div> */}
                  <div className="overlay">
                    <button
                      className="read-more-button"
                      onClick={() => handleReadMore(item.cardName)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Show specific industry content when "Read More" is clicked
            <div className="content-view">
              <div className="row">
                <div className="col-xl-4 col-12">
                  <img
                    src={IndustryInfo[selectedIndustry].src}
                    alt={IndustryInfo[selectedIndustry].defaultText}
                    className="content-image"
                    style={{ position: "sticky", top: 0 }}
                  />
                </div>
                <div className="col-xl-1 col-12"></div>
                <div className="col-xl-7 col-12">
                  <i
                    class="fa fa-arrow-left"
                    onClick={handleBack}
                    aria-hidden="true"
                    style={{ color: "white" }}
                  ></i>
                  {/* <h2 style={{color:'white', fontWeight:900, textAlign:'center', margin:15 }}>{IndustryInfo[selectedIndustry].defaultText}</h2> */}
                  <p style={{ color: "white" }}>
                    {IndustryInfo[selectedIndustry].Content}
                  </p>
                  {/* <button className="btn btn-light back-button p-2 mb-2 ml-2" onClick={handleBack}  style={{color:'black'}}>
                Back
              </button> */}
                  <i
                    class="fa fa-arrow-left"
                    onClick={handleBack}
                    aria-hidden="true"
                    style={{ color: "white" }}
                  ></i>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Industry;
