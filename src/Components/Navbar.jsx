import React, { useState } from "react";
import Logo from "./Logo";
import Buttons from "./Buttons";
import Nav from "./Nav";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" w-3/4 flex justify-between items-center mt-6 bg-white m-auto">
      <div className="flex justify-between gap-4">
        <Logo />
        <Nav isOpen={isOpen} />
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className="hidden md:flex gap-2 py-2">
        <Buttons bgColor="#fff" textColor=" #34313d">
          Login
        </Buttons>
        <Buttons>Sign Up</Buttons>
      </div>
    </nav>
  );
};

export default Navbar;
