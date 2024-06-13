import imgOne from "../../assets/image_2.jpg";
import FrontEnd from "./langg_components/frontend";
import BackEnd from "./langg_components/backend";
import React from "react";

export const Langg = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="ml-4">
          <h1 className="lg:text-7xl sm:text-6xl text-center font-bold">
            Tools that I Use
          </h1>
          <p className="text-sm  text-center font-ligh mt-2">
            (Hover the icons)
          </p>
          <p className="font-semibold text-center mt-3">
            Front end development.{" "}
          </p>

          <div className="flex space-x-4 items-center">
            <FrontEnd />
          </div>
          <p className="font-semibold content-center text-center mt-3">
            Back end development.{" "}
          </p>
          <div className="flex space-x-4 ml-12 items-center">
            <BackEnd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Langg;
