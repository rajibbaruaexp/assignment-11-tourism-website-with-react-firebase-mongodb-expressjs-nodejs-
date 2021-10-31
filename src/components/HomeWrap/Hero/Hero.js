import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-area-wrapper  bg-center bg-cover flex items-center pt-24 pb-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-1 gap-4">
            <div className="hero-description ">
              <span className="bg-blue-500 text-uppercase text-white p-1 rounded text-sm font-semibold">
                LET'S MAKE A CHANGE
              </span>
              <h1 className="sm:text-5xl text-white text-4xl p-10 sm:pl-0">
                Paradise Travel and Tour is here to make your day
              </h1>
              <p className="pb-5 text-white">
                Coronavirus disease (COVID-19) is an infectious disease caused{" "}
                <br />
                by the SARS-CoV-2 virus. Most people who fall sick with COVID-19{" "}
                <br />
                will experience mild to moderate symptoms and recover without
                special treatment
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
