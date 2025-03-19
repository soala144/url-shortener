import React from "react";
import Logo from "./Logo";
import Buttons from "./Buttons";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center mt-6 bg-white">
      <div className="flex justify-between gap-4">
        <Logo />
        <Nav />
      </div>
      <div>
        <Buttons></Buttons>
        <Buttons></Buttons>
      </div>
    </nav>
  );
};

export default Navbar;
