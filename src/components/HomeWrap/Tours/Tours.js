import React, { useEffect, useState } from "react";
import SingleTour from "../../SingleTour/SingleTour";
import "./Tours.css";

const Tours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="title p-14">
        <h1 className="text-4xl	">Our Tour Plans</h1>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {tours.map((tour) => (
          <SingleTour key={tour._id} service={tour}></SingleTour>
        ))}
      </div>
    </div>
  );
};

export default Tours;
