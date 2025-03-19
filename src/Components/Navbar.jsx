import React from "react";
import Logo from "./Logo";
import Buttons from "./Buttons";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <nav className=" w-3/4 flex justify-between items-center mt-6 bg-white m-auto">
      <div className="flex justify-between gap-4">
        <Logo />
        <Nav />
      </div>
      <div className="flex gap-2 py-2">
        <Buttons bgColor="#fff" textColor=" #34313d">
          Login
        </Buttons>
        <Buttons>Sign Up</Buttons>
      </div>
    </nav>
  );
};

export default Navbar;
