import React from "react";
import { Link } from "react-router-dom";

const Welcom = () => {
  return (
    <div className="bg-blue-100 mt-14 mb-14">
      <div className="container mx-auto">
        <div className="row">
          <div className=" dark:bg-gray-800 ">
            <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className="block">Want to travel?</span>
                <span className="block text-indigo-500">
                  It&#x27;s today or never.
                </span>
              </h2>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className=" inline-flex rounded-md shadow">
                    <Link to="/contact">
                  <button
                    type="button"
                    className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Get started
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcom;
