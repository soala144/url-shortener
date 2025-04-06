import React from "react";
import Buttons from "./Buttons";

const Nav = () => {
  return (
    <>
      <ul className="hidden md:flex justify-between gap-4 text-gray-300 text-xs py-2 ">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
    </>
  );
};

export default Nav;
