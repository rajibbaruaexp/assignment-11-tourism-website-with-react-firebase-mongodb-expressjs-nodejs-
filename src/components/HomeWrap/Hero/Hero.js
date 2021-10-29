import React from "react";
import { Link } from "react-router-dom";
// import CovidKit from "../../../../images/covid-test-kit.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-area-wrapper  bg-center bg-cover flex items-center pt-24 pb-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="hero-description  text-left">
              <span className="bg-blue-500 text-uppercase text-white p-1 rounded text-sm font-semibold">
                FEATURED TOUR PLAN
              </span>
              <h1 className="sm:text-5xl text-white text-4xl p-10 sm:pl-0">
                Test your covid-19 symptom with care
              </h1>
              <p className="pb-5 text-white">
                Coronavirus disease (COVID-19) is an infectious disease caused
                by the SARS-CoV-2 virus. Most people who fall sick with COVID-19
                will experience mild to moderate symptoms and recover without
                special treatment
              </p>
              <Link to="/all-services">
                <button className="hover:bg-red-600 transition-all bg-blue-500 text-white	p-5 rounded pt-3 pb-3 mt-5 ">
                  Find Out More
                </button>
              </Link>
            </div>
            <div className="covid-test-kit">
              {/* <img src={CovidKit} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
