import timiOne from "../../assets/works/timi-mockup.png";
import sdocsOne from "../../assets/works/sdocs-mockup.png";
import pconnectOne from "../../assets/works/pconnect-mockup.png";
import campOne from "../../assets/works/camp-mockup.png";
import djfesOne from "../../assets/works/djfes-mockup.png";
import ptestOne from "../../assets/works/ptestnbg-mockup.png";
import React from "react";

export const myWorks = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col text-justify lg:flex-row-reverse w-full">
          <div className="lg:mr-4 lg:text-left text-center w-full">
            <h1 className="lg:text-7xl text-center text-3xl font-bold">
              My Works
            </h1>
            <div className="pt-5">
              <div className="w-full p-5">
                <div className="card card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={timiOne}
                      className="w-full h-72 object-cover"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Watch</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5">
                <div className="card card-side flex-row-reverse bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={sdocsOne}
                      className="w-full h-72 object-cover"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary">Watch</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5">
                <div className="card card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={pconnectOne}
                      className="w-full h-72 object-cover"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Watch</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5">
                <div className="card card-side flex-row-reverse bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={campOne}
                      className="w-full h-72 object-cover"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary">Watch</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5">
                <div className="card card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={djfesOne}
                      className="w-full h-72 object-cover"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Watch</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5">
                <div className="card card-side flex-row-reverse bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={ptestOne}
                      className="w-full h-72 object-cover"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary">Watch</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myWorks;
