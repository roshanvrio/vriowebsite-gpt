// import React, { useState, useEffect } from "react";
// import "./Homecontent.css";
// import Image1 from "../../Assets/Loopimge/Caraousel=Loop_01landingPage.png";
// import Image2 from "../../Assets/Loopimge/Caraousel=Loop_02landingPage.png";
// import Image3 from "../../Assets/Loopimge/Caraousel=Loop_03landingPage.png";
// import Image4 from "../../Assets/Loopimge/Caraousel=Loop_04landingPage.png";
// import Image5 from "../../Assets/Loopimge/Caraousel=Loop_05landingPage.png";
// import Image6 from "../../Assets/Loopimge/Caraousel=Loop_06landingPage.png";

// const images = [Image1, Image2, Image3, Image4, Image5, Image6];

// const HomeLanding = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <div className="image-container">
//         <img
//           src={images[currentImageIndex]}
//           alt="Decorative"
//           className="header-image"
//         />
//         <div className="text-overlay">
//           <p>Unleashing digital</p>
//           <p>Transformation in Energy</p>
//           <p>utilities with sustainable AI</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeLanding;
import React, { useState, useEffect, useRef } from "react";
import "./Homecontent.css";
import Image1 from "../../Assets/Loopimge/Banner_01.png";
import Image2 from "../../Assets/Loopimge/Banner_02.png";
import Image3 from "../../Assets/Loopimge/Banner_03.png";
import Image4 from "../../Assets/Loopimge/Banner_04.png";
import Image5 from "../../Assets/Loopimge/Banner_05.png";
import Image6 from "../../Assets/Loopimge/Banner_06.png";

const images = [Image1, Image3, Image4, Image2, Image5, Image6];
const texts = [
  [`Scarce Resources  <br/> Strategic Solutions`],

  ["Empowering Our Clients with <br> Next Generation utilities and technology"],
  ["Optimizing Operations <br/> Minimizing Costs"], //
  ["Accelerating the Journey <br> to Net Zero Waste"],
  ["Powering the Future, <br/> Responsibly"],
  ["Committed to a Cleaner, Greener Planet <br/> Protecting What Matters"],
];

const HomeLanding = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("hide-image");
      setShowText(false);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeClass("");

        setTimeout(() => setShowText(true), 5000);
      }, 5000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className={`image-container ${fadeClass}`}>
        <img
          src={images[currentImageIndex]}
          alt="Decorative"
          className="header-image"
        />
      {/* <div className={`text-overlay ${showText ? "show" : ""}`}>
  {texts[currentImageIndex].map((line, lineIndex) => (
    <p key={lineIndex} dangerouslySetInnerHTML={{ __html: line }} />
  ))}
</div> */}
      </div>
    </div>
  );
};

export default HomeLanding;
