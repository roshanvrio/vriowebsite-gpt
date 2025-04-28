import Energy from "../Assets/Industry/Energy.png";
import Oil from "../Assets/Industry/oil-gas.png";
import Waste from "../Assets/Industry/wastemangement.png";
import Water from "../Assets/Industry/water-utility.png";
import Electrical from "../Assets/Industry/Electrical.png";
import {Energymanagement, Waterutilities,OilAndGas,HazardousWasteManagement,ElectricUtilities} from "./Description/IndustryPage/IndustryDesc";

export const IndustryInfo = [
  {
    src: Waste,
    defaultText: "HAZARDOUS WASTE MANAGEMENT",
    cardName:'hazardouswastemanagement',
    overlayText:
      "Proper management and treatment of wastewater are essential to protect public health, the environment, and water resources.",
      Content: <HazardousWasteManagement/>
  },
  {
    src: Water,
    defaultText: "WATER UTILITIES",
    cardName:'waterutilities',
    overlayText:
      "Water utilities are essential for delivering safe drinking water, managing wastewater, and ensuring the sustainable use of water resources.",
      Content: <Waterutilities/>
  },
  {
    src: Energy,
    defaultText: "ENERGY MANAGEMENT",
    cardName:'energymanagement',
    overlayText:
      "The energy management sector focuses on the production, distribution, and efficient use of energy.",
      Content: <Energymanagement/>
  },
 
  {
    src: Oil,
    defaultText: "OIL & GAS",
    cardName:'oilgas',
    overlayText:
      "These utilities play a vital role in providing the energy necessary for various sectors, including residential, commercial, industrial, and transportation.",
      Content: <OilAndGas/>
  },
 
  {
    src: Electrical,
    defaultText: "ELECTRIC UTILITIES",
    cardName:'electricutilities',
    overlayText:
      "Electric utilities ensure the generation, transmission, and distribution of reliable electricity to power homes, businesses, and industries.",
      Content: <ElectricUtilities/>
  },
];