import React, { useState } from "react";
import Logo from "./Logo";
import Buttons from "./Buttons";
import Nav from "./Nav";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full m-auto">
      <nav className=" w-3/4 flex justify-between items-center mt-6 bg-white m-auto">
        <div className="flex justify-between gap-4">
          <Logo />
          <Nav isOpen={isOpen} />
        </div>

        <div className="hidden md:flex gap-2 py-2">
          <Buttons bgColor="#fff" textColor=" #34313d">
            Login
          </Buttons>
          <Buttons>Sign Up</Buttons>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="w-3/4 m-auto fixed top-[10%]  bg-primary ">
          <ul className="md:hidden flex justify-between gap-4 flex-col mt-2 w-3/2  text-gray-300 m-auto text-xs py-2 ">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            <Buttons bgColor="#fff" textColor=" #34313d">
              Login
            </Buttons>
            <Buttons>Sign Up</Buttons>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
