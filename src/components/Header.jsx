import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // Default to false for closed menu

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <header className="flex justify-center items-center py-3 sm:py-4 shadow-lg sticky top-0 left-0 bg-white z-10">
      <div className="container flex justify-between items-center w-[95%]">
        <div className="logo">
          <img src={logo} className="w-[80px] sm:w-[100px]" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex font-semibold gap-10 sm:gap-16 cursor-pointer">
          <li onClick={() => navigate("/")}>Home</li>
          <li>About</li>
          <li>Restaurants</li>
        </ul>

        {/* Join Us Button */}
        <div className="icon flex gap-5">
          <button
            onClick={() => navigate("/signup")}
            className="bg-orange-400 font-semibold px-2 py-1 rounded-md sm:py-2 sm:px-3"
          >
            Join us
          </button>

          {/* Menu Icon for Mobile */}
          {showMenu ? (
            <X className="h-8 block sm:hidden" onClick={toggleMenu} />
          ) : (
            <Menu className="h-8 block sm:hidden" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <ul className="absolute top-[100%] left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 font-semibold sm:hidden transition duration-300 ease-in-out">
          <li onClick={() => { toggleMenu(); navigate("/"); }}>Home</li>
          <li onClick={toggleMenu}>About</li>
          <li onClick={toggleMenu}>Restaurants</li>
        </ul>
      )}
    </header>
  );
};

export default Header;
