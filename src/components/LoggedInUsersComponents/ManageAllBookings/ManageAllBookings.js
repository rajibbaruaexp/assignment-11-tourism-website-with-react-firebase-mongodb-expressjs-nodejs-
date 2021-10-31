import React, { useState, useEffect } from "react";

const ManageAllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);

  //fetching all users
  useEffect(() => {
    fetch("https://creepy-cheateau-41595.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [allBookings]);

  //deleting a booking
  const handleBookingDelete = (id) => {
    console.log(id);
    const confirmation = window.confirm("Are you sure to delete?");
    if (confirmation) {
      fetch(`https://creepy-cheateau-41595.herokuapp.com/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Booking cancled successfully!!");
            const remainingBookings = allBookings.filter(
              (booking) => booking._id !== id
            );
            setAllBookings(remainingBookings);
          }
        });
    }
  };

  //aprove booking
  const handleApproveBooking = (id) => {
    const status = "approved";
    const toBeUpdate = allBookings.find((booking) => booking._id === id);

    const updatedData = { ...toBeUpdate, status };

    const url = `https://creepy-cheateau-41595.herokuapp.com/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("approved");
      });

    console.log(updatedData);
  };
  return (
    <>
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
          <h1 className="text-4xl text-white">All bookings</h1>
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
                {allBookings.map((booking) => (
                  <>
                    <span className="m-2"></span>
                    <tr className="bg-blue-200">
                      <td>{booking.tourPackage}</td>
                      <td>{booking.email}</td>
                      <td className="font-bold">{booking.status}</td>
                      <td className="text-right buttonallonmobile">
                        <button
                          onClick={() => handleApproveBooking(booking._id)}
                          className="text-white bg-green-600 p-2 mr-2"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleBookingDelete(booking._id)}
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
    </>
  );
};

export default ManageAllBookings;
