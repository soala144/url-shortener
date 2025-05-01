import React, { useState } from "react";
import Logo from "./Logo";
import Buttons from "./Buttons";
import Nav from "./Nav";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className=" w-3/4 flex justify-between rounded-3xl z-50 fixed left-13 items-center py-6 px-8 mt-3 md:left-36 bg-white m-auto">
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
        <div className="w-3/4 m-auto fixed top-16 right-7 rounded-xl py-5 z-100 bg-firstpurple items-center justify-center">
          <ul className="md:hidden flex justify-between gap-4 flex-col w-3/4 m-auto text-gray-300 text-xs py-3 ">
            <li className="text-center">Features</li>
            <li className="text-center">Pricing</li>
            <li className="text-center">Resources</li>
            <Buttons bgColor="#fff" textColor=" #34313d">
              Login
            </Buttons>
            <Buttons>Sign Up</Buttons>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
