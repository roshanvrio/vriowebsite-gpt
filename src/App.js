import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation  } from "react-router-dom";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Team from "./Pages/Ourteam/Team";
import Industries from "./Pages/Industries/Industries";
import JoinUs from "./Pages/Join/Join";
import Solution from "./Pages/Solutions/Solutions";
import Loading from "./Loading/Loading";
import VrioImages from "./Pages/VrioImage/VrioImage";
import NotFound from "./NotFound"; // Create this component
import ExpoHome from "./Pages/Expo/expohome";
import WasteAnalyticsPlatform from "./Pages/Expo/WasteAnalyticsPlatform";
import ContainerTracking from "./Pages/Expo/containertracking";
import CustomerManagement from "./Pages/Expo/customermanagment";
import SalesGrowth from "./Pages/Expo/salesgrowth";
import ProcessAutomation from "./Pages/Expo/processautomation";
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const currentLocation = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

   // Paths where Header and Footer should not be displayed
   const noHeaderFooterPaths = ["/image"];

   const shouldShowHeaderFooter = !noHeaderFooterPaths.includes(currentLocation.pathname);
  
   return (
    <div>
      {shouldShowHeaderFooter && <Header />}
      <main>
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Uncomment when Team is ready */}
            {/* <Route path="/team" element={<Team />} /> */}
            <Route path="/industries/:card?" element={<Industries />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/solutions/:card?" element={<Solution />} />
            <Route path="/image" element={<VrioImages />} />
            <Route path="/vrioedge" element={<ExpoHome />} />
            {/* Fallback for undefined routes */}
            <Route path="*" element={<NotFound />} />
            <Route path="/wasteanalyticsplatform" element={<WasteAnalyticsPlatform />} />
            <Route path="/container-tracking" element={<ContainerTracking />} />
            <Route path="/customer-management" element={<CustomerManagement />} />
            <Route path="/sales-growth" element={<SalesGrowth />} />
            <Route path="/process-automation" element={<ProcessAutomation />} />
          </Routes>
        )}
      </main>
      {shouldShowHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
