import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import imgOne from "./assets/image_1.jpg";
import bottomImg from "./assets/parallax/bottom-min.png";
import middleImg from "./assets/parallax/middle-min.png";
import topImg from "./assets/parallax/top-min.png";
import overallImg from "./assets/parallax/overall.png";
import circleLogo from "./assets/parallax/logo-min.png";
import boxLogo from "./assets/parallax/box-logo-min.png";
import Header from "./views/partials/Header";
import ParallaxComponent from "./views/parallax/Parallax";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <ParallaxComponent
          bottomImg={bottomImg}
          middleImg={middleImg}
          topImg={topImg}
          overallImg={overallImg}
          boxLogo={boxLogo}
        />
      </div>
    </>
  );
}

export default App;
