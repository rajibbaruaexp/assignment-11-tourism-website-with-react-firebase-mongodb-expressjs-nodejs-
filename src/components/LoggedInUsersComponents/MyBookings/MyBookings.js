import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./MyBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [foundUser, setFoundUser] = useState([]);
  const { user } = useAuth();
  //fetching all users
  useEffect(() => {
    fetch("https://creepy-cheateau-41595.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [bookings]);

  //searching user
  useEffect(() => {
    const searchResult = bookings.filter(
      (booking) => booking.email === user.email
    );
    setFoundUser(searchResult);
    // console.log(searchResult);
  }, [user.email, bookings]);

  //deleting a booking
  const handleBookingDelete = (id) => {
    const confirmation = window.confirm("Are you sure to delete?");
    if (confirmation) {
      fetch(`https://creepy-cheateau-41595.herokuapp.com/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Booking cancled successfully!!");
            const remainingBookings = foundUser.filter(
              (booking) => booking._id !== id
            );
            setFoundUser(remainingBookings);
          }
        });
    }
  };
  return (
    <div>
      <div
        className="containerFluid single-booking-bg"
        style={{
          backgroundImage: `url(https://i.ibb.co/nbFpnq9/Tour-Packages-in-Nepal-1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: "1",
        }}
      >
        <div className="title p-14 pt-24 pb-24">
          <h1 className="text-4xl text-white">My all bookings</h1>
        </div>
      </div>

      <div className="container mx-auto pt-14">
        <div className="grid sm:grid-cols-1 gap-4">
          <div className="all-bookings m-auto	w-2/3	">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-800 text-white pt-4">
                  <th className="w-1/4 p-2">Bookings</th>
                  <th className="w-1/4 p-2">Email</th>
                  <th className="w-1/4 p-2">Status</th>
                  <th className="w-1/4 p-2"></th>
                </tr>
              </thead>
              <tbody>
                {foundUser.map((singleUser) => (
                  <>
                    <span className="m-2"></span>
                    <tr className="bg-blue-200">
                      <td>{singleUser.tourPackage}</td>
                      <td>{singleUser.email}</td>
                      <td className="font-bold">{singleUser.status}</td>
                      <td className="text-right">
                        <button
                          onClick={() => handleBookingDelete(singleUser._id)}
                          className="text-white bg-red-600 p-2 "
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
