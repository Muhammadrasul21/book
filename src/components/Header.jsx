import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <nav className="mt-4">
      <div className="container mx-auto max-w-[1140px] p-4">
        <div className="navbar__wrapper flex justify-between items-center">
          <div className="logo flex items-center gap-9">
            <img src={logo} alt="Company Logo" />
            <ul className="flex gap-10">
              {["Home", "About us", "Menu", "Features", "Contact us"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                      className="font-medium hover:text-[#DC780B] transition-all duration-300 ease-in-out"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <button className="w-40 h-11 rounded-md bg-[#DC780B] text-white hover:bg-white hover:text-[#DC780B] hover:border hover:border-[#dc780b] transition-all duration-300 ease-in-out">
            Booking Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
