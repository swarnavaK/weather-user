import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ selectedOption, handleOptionChange }) => {
  const location = useLocation();
  console.log("location", location.pathname, selectedOption);

  // Update selected option when route changes
  useEffect(() => {
    if (location.pathname === "/traveller"|| location.pathname === "/") {
      handleOptionChange("traveller");
    } else if (location.pathname === "/farmer") {
      handleOptionChange("farmer");
    }
  }, [location.pathname, handleOptionChange]);

  const handleClick = (option) => {
    handleOptionChange(option);
  };

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <span className='text-white text-lg font-semibold'>
            User Weather App
          </span>
        </div>
        <div className='flex space-x-4'>
          <Link to='/traveller'>
            <button
              onClick={() => handleClick("traveller")}
              className={`text-white text-lg ${
                selectedOption === "traveller"
                  ? "font-semibold text-teal-600"
                  : ""
              }`}
            >
              Traveller
            </button>
          </Link>
          <Link to='/farmer'>
            <button
              onClick={() => handleClick("farmer")}
              className={`text-white text-lg ${
                selectedOption === "farmer" ? "font-semibold text-teal-600" : ""
              }`}
            >
              Farmer
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
