import React from "react";
import Logo from "./Logo";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <nav>
      <div>
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
