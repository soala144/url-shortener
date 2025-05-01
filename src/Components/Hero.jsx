import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div className="flex-col-reverse w-full gap-4 md:flex-row flex justify-between items-center m-auto bg-white mt-24 mb-9 md:w-3/4">
      <HeroText />
      <HeroImg />
    </div>
  );
};

export default Hero;
