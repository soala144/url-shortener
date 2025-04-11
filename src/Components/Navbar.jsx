import React, { useState } from "react";
import Logo from "./Logo";
import Buttons from "./Buttons";
import Nav from "./Nav";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-10">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="m-auto fixed top-[10%] w-full p-8 bg-white z-50">
          <ul className="md:hidden flex justify-between gap-4 flex-col mt-2 w-full ml-auto text-gray-300 text-xs py-2 ">
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
    </>
  );
};

export default Navbar;
