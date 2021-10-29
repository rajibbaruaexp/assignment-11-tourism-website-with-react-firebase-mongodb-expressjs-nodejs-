import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

import "./Booking.css";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  let { id } = useParams();
  const [tours, setTours] = useState([]);
  const [tour, setTour] = useState({});
  //fetching data from server
  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  //finding data from fetched data
  useEffect(() => {
    const foundResult = tours.find((tour) => tour._id === id);
    setTour(foundResult);
  }, [id, tours]);

  //order place form with react hook form
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div
        className="containerFluid single-booking-bg"
        style={{
          backgroundImage: `url(${tour?.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: "1",
        }}
      >
        <div className="title p-14 pt-24 pb-24">
          <h1 className="text-4xl text-white">{tour?.name}</h1>
        </div>
      </div>
      <div className="container mx-auto pt-14">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="selectedPlace">
            <div className="max-w-lg mx-auto">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-5 p-4 m-4">
                <img className="rounded-t-lg" src={tour?.img} alt="" />
                <div className="p-5 text-left">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {tour?.name}
                  </h5>
                  <p className="font-normal text-gray-700 p-1">
                    <span className="font-bold">Price</span>: {tour?.price}
                  </p>

                  <p className="font-normal text-gray-700 p-1">
                    <span className="font-bold">Date</span>: {tour?.time}
                  </p>

                  <p className="font-normal text-gray-700 p-1">
                    <span className="font-bold">Travel Guide</span>:{" "}
                    {tour?.tourGuide}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="checkOut">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="package" className="text-left">
                Your selected package
              </label>
              <input
                id="package"
                type="text"
                placeholder="Package"
                value={tour?.name}
                {...register("package", { required: true, maxLength: 20 })}
              />

              <label htmlFor="name" className="text-left">
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={user?.displayName}
                placeholder="Your Name"
                {...register("name", { required: true, maxLength: 20 })}
              />

              <label htmlFor="email" className="text-left">
                Your email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={user?.email}
                placeholder="Your Email"
                {...register("email", { required: true })}
              />

              <input
                placeholder="Phone Number"
                type="number"
                {...register("phonenumber", { min: 18, max: 99 })}
              />

              <input type="submit" value="Pay and book your seat" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
