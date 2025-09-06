import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { TbCircleLetterKFilled } from "react-icons/tb";
import { TbCircleLetterSFilled } from "react-icons/tb";
import ThemeToggleButton from "../NavbarElements/ThemeToggleButton";
import Github_Link from "../NavbarElements/Github_Link";
import ThemeContext from "../../..//ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="w-full h-12 mt-2 ml-2 flex items-center border-y-2  border-gray-500">
        <div className="w-2/4 h-11  m-auto flex justify-end items-center space-x-3 border-x-2 border-gray-500 ">
            <a
              className={`cursor-pointer no-underline ${
                darkTheme ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Portfolio
            </a>
            <a
              className={`cursor-pointer no-underline ${
                darkTheme ? "text-gray-300" : "text-gray-900"
              }`}
            >
              About me
            </a>
            <a
              className={`cursor-pointer no-underline ${
                darkTheme ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Social
            </a>
            <div
              className={`flex w-24 h-8 justify-around items-center  border-2 rounded-3xl cursor-pointer border-gray-500  `}
            >
              <IoSearchSharp
                className={` w-5 h-5 ${
                  darkTheme ? "search-button-dark" : "search-button-light"
                }`}
              />
              <div
                className={`border-2 h-6 rounded ${
                  darkTheme ? "ctrl-k-dark" : "ctrl-k-light bg-gray-300"
                } text-xs w-13 flex justify-center items-center`}
              >
                Ctrl K
              </div>
            </div>
            <Github_Link />
            <ThemeToggleButton />
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
