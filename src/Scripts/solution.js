import Consulting from "../Assets/Solution/consulting.png";
import CustomerExperience from "../Assets/Solution/CustomerExperience.png";
import DataAi from "../Assets/Solution/data&ai.png";
import RPA from "../Assets/Solution/rpa.png";
import FleetManagement from "../Assets/Solution/FleetManagement.png";
import transportation from "../Assets/Solution/transportation.png";
import Gis from "../Assets/Solution/maps.png";
import AWManage from "../Assets/Solution//asset.png";
import HWManage from "../Assets/Solution/hazWater.png";
import {SolutionDesc,CustomerExpr,Rpa,Data,Fleet,GISinUtilities,AWMInUtilities,TransportationSolutions,HazardousWasteTracking} from "./Description/SolutionPage/SolutionDesc";
export const solutionInfo = [
  {
    src: Consulting,
    defaultText: "ADVISIORY",
    cardName:'advisory',
    overlayText:
      "We empower businesses with expert consulting solutions, driving strategic growth and transformative results.",
    Content: <SolutionDesc/>
  
  },
    {
    src: CustomerExperience,
    defaultText: "CUSTOMER EXPERIENCE",
    cardName:'customerexperience',
    overlayText:
      "We focus on delivering seamless, personalized experiences for every customer, driving success and satisfaction.",
      Content: <CustomerExpr/>
      
  },
  {
    src: HWManage,
    defaultText: "TRACKING SOLUTIONS",
    cardName:'hazardouswastetracking',
    overlayText:
      "Tracking solutions monitor assets, vehicles, or personnel in real time for enhanced visibility and efficiency.",
    Content: <HazardousWasteTracking/>
  },
 
  {
    src: FleetManagement,
    defaultText: "TRANSPORTATION & FLEET MANAGEMENT ",
    cardName:'transportationandfleet',
    overlayText:
      "From tracking and maintenance to cost control and performance analytics, our tools ensure efficiency and reliability for your fleet.",
    Content: <Fleet/>
  },
  
  {
    src: AWManage,
    defaultText: "ASSET & WORK MANAGEMENT",
    cardName:'assetandwork',
    overlayText:
      "Asset and Work Management optimizes resources, tracks performance, and streamlines tasks for operational efficiency.",
    Content: <AWMInUtilities/>
  },
  
  {
    src: Gis,
    defaultText: "GIS",
    cardName:'gis',
    overlayText:
      "GIS integrates, analyzes, and visualizes geographic data to uncover patterns and inform spatial decisions.",
    Content: <GISinUtilities/>
  },
  {
    src: RPA,
    defaultText: "ROBOTIC PROCESS AUTOMATION",
    cardName:'rpa',
    overlayText:
      "Our goal is to deliver personalized, effortless experiences that drive customer satisfaction and lasting success",
      Content: <Rpa/>

   
  },
  {
    src: DataAi,
    defaultText: "DATA & AI",
    cardName:'dataai',
    overlayText:
      "Our insights and tools are built to grow with your business, enabling seamless scaling as you expand.",
    Content: <Data/>
  },
  
  
];
