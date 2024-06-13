import imgOne from "../../assets/image_2.jpg";
import React from "react";

export const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col text-justfiy lg:flex-row">
        <img
          src={imgOne}
          alt="Profile"
          className="w-96 h-96 object-cover rounded-lg shadow-2xl"
        />
        <div className="ml-4">
          <h1 className="lg:text-7xl text-center lg:text-start text-3xl font-bold">
            A Fresh Web Developer Produced in 082
          </h1>
          <p className="py-6 text-justify">
            Hi you can call me Zo, im a Front and Back End Developer from Davao
            City. I enjoy being creative and making websites/applications that
            suits your taste while using latest technologies and clean design
            patterns.
          </p>
          <div className="flex space-x-4 items-center">
            <button className="btn btn-primary pr-4">View Resume</button>
            <a href="#" className="p-2 rounded hover:bg-blue-500 justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-6 h-6">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="#" className="p-2 rounded hover:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="fill-current w-6 h-6">
                <path d="M 18.5 2 C 10.75 2 6 11.25 6 16 C 6 16 9.25 4 19 4 C 22.625 4 25 6 25 6 C 25 6 24 2 18.5 2 z M 17.5 7 A 3.5 3.5 0 1 0 17.5 14 A 3.5 3.5 0 1 0 17.5 7 z M 20 16 C 20 16 19 17 15 17 L 15 27.5 C 15 28.881 16.119 30 17.5 30 C 18.881 30 20 28.881 20 27.5 L 20 16 z"></path>
              </svg>
            </a>
            <a href="#" className="p-2 rounded hover:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className="fill-current w-6 h-6">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
