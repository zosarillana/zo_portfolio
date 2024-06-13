import React from "react";
import About from "../blocks/About";
import Footer from "../footer/Footer";
import Profile from "../profile/Profile";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"; // Import Parallax components
import Langg from "../blocks/Langg";

const ParallaxComponent = ({
  bottomImg,
  middleImg,
  topImg,
  overallImg,
  boxLogo,
}) => {
  return (
    <Parallax pages={4} style={{ top: "0", left: "0" }} className="animation">
      <ParallaxLayer offset={0.015} speed={0.29}>
        <div className="animation_layer parallax" id="overall">
          <img
            src={overallImg}
            alt="Overall Layer"
            className="w-full max-h-screen h-auto"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.015} speed={0.1}>
        <div className="animation_layer parallax" id="bottom">
          <img
            src={bottomImg}
            alt="Bottom Layer"
            className="w-full max-h-screen h-auto"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.015} speed={0.2}>
        <div className="animation_layer parallax" id="middle">
          <img
            src={middleImg}
            alt="Middle Layer"
            className="w-full max-h-screen h-auto"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.015} speed={0.01} style={{ zIndex: 10 }}>
        <div className="animation_layer parallax" id="logo">
          <img src={boxLogo} alt="Logo Layer" className="m-auto max-h-screen" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.015} speed={0.45}>
        <div className="animation_layer parallax" id="top">
          <img
            src={topImg}
            alt="Top Layer"
            className="w-full max-h-screen h-auto"
          />
        </div>
      </ParallaxLayer>
      {/* Text Block Layers */}
      <ParallaxLayer offset={0.85} speed={0.5}>
        <div>
          <About />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.45} speed={0.35}>
        <div>
          <Langg />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.25} speed={0.25}>
        <div>
          <Profile />
        </div>
      </ParallaxLayer>
      {/* Footer Layer */}
      <ParallaxLayer offset={3.5} speed={0.5}>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxComponent;
