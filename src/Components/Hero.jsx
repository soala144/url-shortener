import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div className="w-full flex justify-between items-center m-auto bg-white ">
      <HeroText />
      <HeroImg />
    </div>
  );
};

export default Hero;
