import React from "react";
import { Link } from "react-router-dom";

const SingleTour = (props) => {
  const { _id, name, img, description } = props.service;
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <img className="rounded-t-lg" src={img} alt="" />
        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {name}
          </h5>
          <p className="font-normal text-gray-700 p-1">
            {description.slice(0, 100)}...
          </p>
          <Link to={`/tours/${_id}`}>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center inline-flex items-center m-4">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
