import React from "react";
import Buttons from "./Buttons";

const HeroText = () => {
  return (
    <div className="w-1/2 mt-[-10px]">
      <header className="text-primary font-black text-6xl mb-5">
        More than just shorter links
      </header>
      <p className="text-gray-300 text-lg mb-5 font-bold">
        Build your brand's recognition and get detailed <br /> insights on how
        your links are performing.
      </p>
      <Buttons>Get Started</Buttons>
    </div>
  );
};

export default HeroText;
