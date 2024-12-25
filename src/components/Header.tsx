import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFF7E2] shadow-md fixed w-full z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 h-[60px]">
        {/* Logo */}
        <h1 className="text-lg md:text-2xl font-bold text-green-600">
          Amrutam
        </h1>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            className="text-green-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <a href="#" className="text-green-600 hover:text-green-800">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-800">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-800">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button (Visible on Medium and Larger Screens) */}
        <div className="hidden md:block">
          <button className="bg-green-600 text-white text-sm md:text-base font-medium px-6 py-2 rounded-lg hover:bg-green-700">
            Book Now
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFF7E2] shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#" className="text-green-600 hover:text-green-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-green-600 hover:text-green-800">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-green-600 hover:text-green-800">
                Contact
              </a>
            </li>
            <li>
              <button className="bg-green-600 text-white text-sm font-medium px-6 py-2 rounded-lg hover:bg-green-700">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
