import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };


  return (
    <div>
      <nav className="top-0 left-0 h-[70px] text-xl text-[#007BFF] fixed w-full  bg-white bg container
       flex items-center justify-between z-30 transition-all">
        <a href="#" onClick={() => scrollToSection("hero")}>
          <img className="h-40 md:h-55" src={assets.brand} />
        </a>

        <ul className="text-[#007BFF] md:flex hidden items-center gap-10">
          <li>
            <a
              className="hover:text-[#007BFF]/70 hover:cursor-pointer transition"
              onClick={() => scrollToSection("hero")}
                href="hero"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#007BFF]/70 hover:cursor-pointer transition"
              onClick={() => scrollToSection("services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#007BFF]/70 hover:cursor-pointer transition"
            onClick={() => scrollToSection('testimonials')}>
              Testimonials
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => scrollToSection("booking")}
          className="bg-primary hidden md:block hover:bg-blue-600 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </div>
        </button>

        {isMenuOpen && (
          <div className="mobile-menu flex flex-col bg-[#F7F9FC] items-center absolute top-[70px] left-0 w-full p-6 py-40 ">
            <ul className="flex flex-col justify-center items-center space-y-4 text-primary text-lg">
              <li>
                <a
                  className="hover:text-primary/70 hover:cursor-pointer transition"
                  onClick={() => scrollToSection("hero")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary/70 hover:cursor-pointer transition"
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary/70 hover:cursor-pointer onClick={() => scrollToSection('testimonials')} transition"
                >
                  Testimonials
                </a>
              </li>
            </ul>
             <button
          type="button"
          onClick={() => scrollToSection("booking")}
          className="bg-primary hover:bg-blue-600 hover:shadow-2xs hover:cursor-pointer text-white text-lg font-semibold mt-4 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Book Now
        </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
