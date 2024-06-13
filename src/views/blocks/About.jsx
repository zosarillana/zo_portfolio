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
          <h1 className="lg:text-7xl text-center lg:text-start text-4xl font-bold">
            A Fresh Web Developer Produced in 082
          </h1>
          <p className="py-6">
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="#" className="p-2 rounded hover:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                className="fill-current">
                <path d="M 18.5 2 C 10.75 2 6 11.25 6 16 C 6 16 9.25 4 19 4 C 22.625 4 25 6 25 6 C 25 6 24 2 18.5 2 z M 17.5 7 A 3.5 3.5 0 1 0 17.5 14 A 3.5 3.5 0 1 0 17.5 7 z M 20 16 C 20 16 19 17 15 17 L 15 27.5 C 15 28.881 16.119 30 17.5 30 C 18.881 30 20 28.881 20 27.5 L 20 16 z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
