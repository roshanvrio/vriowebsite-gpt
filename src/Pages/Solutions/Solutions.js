import "./Solution.css";
import React, { useState, useEffect } from "react";
import { solutionInfo } from "../../Scripts/solution";
import Solutionimg from "../../Assets/Solution/solution.png";
import { useParams, useNavigate } from "react-router-dom";

const Solution = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const { card } = useParams();
  const navigate = useNavigate();

  const cardIndex = {
    advisory: 0,
    customerexperience: 1,
    hazardouswastetracking: 2,
    transportationandfleet: 3,
    assetandwork: 4,
    gis: 5,
    rpa: 6,
    dataai: 7,
  };

  const handleReadMore = (solution) => {
    navigate(`/solutions/${solution}`);
    const index = parseInt(cardIndex[solution]);
    setSelectedSolution(index);
  };

  const handleBack = () => {
    navigate(`/solutions`);
    setSelectedSolution(null);
  };

  useEffect(() => {
    if (typeof card !== "undefined") {
      const solutionIndex = parseInt(cardIndex[card]);
      if (!isNaN(solutionIndex)) {
        setSelectedSolution(solutionIndex);
      } else {
        navigate(`*`);
      }
    }
  }, []);

  return (
    <>
      <div className="solutionConatiner">
        <div className="container-fluid">
          <img src={Solutionimg} alt="Solution banner" className="bgimg" />
          <div className="text-overlay">
            <h1>
              SOLUTIONS<span style={{ color: "red" }}>.</span>
            </h1>
          </div>
        </div>
        <div className="home-container">
          <div className="text-container"></div>
          <div className="static-grid">
            {selectedSolution === null ? (
              // Show all grid items when no specific industry is selected
              solutionInfo.map((item, index) => (
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
              <div className="content-view">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={solutionInfo[selectedSolution].src}
                      alt={solutionInfo[selectedSolution].defaultText}
                      className="content-image"
                      style={{ position: "sticky", top: 0 }}
                    />
                  </div>
                  <div className="col-1"></div>
                  <div className="col-7">
                    <i
                      class="fa fa-arrow-left"
                      onClick={handleBack}
                      aria-hidden="true"
                      style={{ color: "white" }}
                    ></i>
                    <p style={{ color: "white" }}>
                      {solutionInfo[selectedSolution].Content}
                    </p>

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
    </>
  );
};

export default Solution;
