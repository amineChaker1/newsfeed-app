import React from "react";
import logo from "../../assets/logo1.png";
const Header = () => {
  return (
    <div className="header ">
      <div className="header-left flex items-center">
        <img src={logo} alt="logo" className="w-20" />
        <div className="header-search flex p-1 items-center bg-blue-100 rounded-md h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input type="text" className="  outline-none border-0 bg-blue-100" />
        </div>
      </div>
      <div className="header-right"></div>
    </div>
  );
};

export default Header;
