import { useState } from "react";
import "./App.css";
import bottomImg from "./assets/parallax/bottom-min.png";
import middleImg from "./assets/parallax/middle-min.png";
import topImg from "./assets/parallax/top-min.png";
import overallImg from "./assets/parallax/overall.png";
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
