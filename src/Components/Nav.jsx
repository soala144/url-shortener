import React from "react";
import Buttons from "./Buttons";

const Nav = ({ isOpen }) => {
  return (
    <>
      <ul className="hidden md:flex justify-between gap-4 text-gray-300 text-xs py-2 ">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      {isOpen && (
        <ul className="md:hidden flex justify-between gap-4 flex-col text-gray-300 text-xs py-2 ">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <Buttons bgColor="#fff" textColor=" #34313d">
            Login
          </Buttons>
          <Buttons>Sign Up</Buttons>
        </ul>
      )}
    </>
  );
};

export default Nav;
