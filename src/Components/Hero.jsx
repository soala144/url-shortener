import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div className="flex justify-between items-center m-auto bg-white mt-16 w-3/4">
      <HeroText />
      <HeroImg />
    </div>
  );
};

export default Hero;
