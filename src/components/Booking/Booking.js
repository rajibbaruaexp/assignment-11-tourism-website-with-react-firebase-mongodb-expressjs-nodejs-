import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

import "./Booking.css";
import useAuth from "../../hooks/useAuth";
// import axios from "axios";

const Booking = () => {
  const { user } = useAuth();
  let { id } = useParams();
  const [tours, setTours] = useState([]);
  const [tour, setTour] = useState({});

  const tourPackageRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");
  const statusRef = useRef("");

  //fetching data from server
  useEffect(() => {
    fetch("https://creepy-cheateau-41595.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  //finding data from fetched data
  useEffect(() => {
    const foundResult = tours.find((tour) => tour._id === id);
    setTour(foundResult);
  }, [id, tours]);

  const handleBookingFrom = (e) => {
    e.preventDefault();
    const tourPackage = tourPackageRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    const status = statusRef.current.value;

    const newUser = { tourPackage, email, phone, address, status };

    //send data to the server
    fetch("https://creepy-cheateau-41595.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        tourPackageRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        addressRef.current.value = "";
        if (data.insertedId) {
          alert("Order is placed");
        }
      });
  };
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
                    <span className=""></span>
                    {tour?.description}
                  </p>

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
            <form onSubmit={handleBookingFrom}>
              <input
                required
                readOnly
                ref={tourPackageRef}
                type="text"
                placeholder="tourPackage"
                defaultValue={tour?.name}
              />

              <input
                required
                readOnly
                ref={emailRef}
                type="email"
                placeholder="Your email"
                defaultValue={user?.email}
              />

              <input
                required
                ref={phoneRef}
                type="number"
                placeholder="Phone Number"
                defaultValue=""
              />

              <input
                required
                ref={addressRef}
                type="text"
                placeholder="address"
                defaultValue=""
              />
              <input type="hidden" value="pending" ref={statusRef} />

              <input type="submit" value="Pay and Book Your Seat" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
