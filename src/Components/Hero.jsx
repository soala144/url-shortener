import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div className=" w-3/4 flex justify-between items-center m-auto bg-white mt-16 ">
      <HeroText />
      <HeroImg />
    </div>
  );
};

export default Hero;
