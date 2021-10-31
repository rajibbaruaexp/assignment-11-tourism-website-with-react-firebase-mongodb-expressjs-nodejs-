import React from "react";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Tours from "./Tours/Tours";
import Welcom from "./Welcome/Welcom";

const HomeWrap = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <Tours></Tours>
      <Welcom></Welcom>
    </div>
  );
};

export default HomeWrap;
