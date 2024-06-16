import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import bottomImg from "./assets/parallax/bottom-min.png";
import middleImg from "./assets/parallax/middle-min.png";
import topImg from "./assets/parallax/top-min.png";
import overallImg from "./assets/parallax/overall.png";
import boxLogo from "./assets/parallax/box-logo-min.png";
import Header from "./views/partials/Header";
import ParallaxComponent from "./views/parallax/Parallax";
import Contact from "./views/contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Main content area component
const AppContent = () => {
  return (
    <ParallaxComponent
      bottomImg={bottomImg}
      middleImg={middleImg}
      topImg={topImg}
      overallImg={overallImg}
      boxLogo={boxLogo}
    />
  );
};

export default App;
