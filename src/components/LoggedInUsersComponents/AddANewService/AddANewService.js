import React, { useRef } from "react";
import "./AddANewService.css";

const AddANewService = () => {
  const titleRef = useRef("");
  const priceRef = useRef("");
  const timeRef = useRef("");
  const guideRef = useRef("");
  const descRef = useRef("");
  const imgRef = useRef("");

  const handleNewService = (e) => {
    e.preventDefault();

    const name = titleRef.current.value;
    const price = priceRef.current.value;
    const time = timeRef.current.value;
    const tourGuide = guideRef.current.value;
    const description = descRef.current.value;
    const img = imgRef.current.value;

    const newService = { name, price, time, tourGuide, description, img };

    //send data to the server
    fetch("https://creepy-cheateau-41595.herokuapp.com/tours", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        titleRef.current.value = "";
        priceRef.current.value = "";
        timeRef.current.value = "";
        guideRef.current.value = "";
        descRef.current.value = "";
        imgRef.current.value = "";
        if (data.insertedId) {
          alert("New Service Added Successfully");
        }
      });
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
          <h1 className="text-4xl text-white">Add A New Service</h1>
        </div>
      </div>
      <div className="title pb-24 addnewservice">
        <form onSubmit={handleNewService}>
          <input
            required
            ref={titleRef}
            type="text"
            placeholder="Service title"
          />
          <input required ref={priceRef} type="number" placeholder="Price" />
          <input required ref={timeRef} type="date" placeholder="Time" />
          <input
            required
            ref={guideRef}
            type="text"
            placeholder="Tour Guide Name"
          />
          <textarea
            required
            ref={descRef}
            placeholder="Write Description"
          ></textarea>

          <input required ref={imgRef} type="text" placeholder="Image link" />
          <input
            className="bg-blue-600 text-white"
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </>
  );
};

export default AddANewService;
