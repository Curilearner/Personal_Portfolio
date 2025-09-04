import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import ThemeToggleButton from "../NavbarElements/ThemeToggleButton";
import Github_Link from "../NavbarElements/Github_Link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-12 mt-2 ml-2 flex items-center border-y-2  border-gray-500">
        <div className="w-4/6 h-11  m-auto flex justify-end items-center space-x-3 border-x-2 border-gray-500 ">
          <a className="cursor-pointer no-underline">Portfolio</a>
          <a className="cursor-pointer no-underline">About me</a>
          <a className="cursor-pointer no-underline">Social</a>
          <div className="flex w-24 h-8 justify-around items-center  border-2 rounded-3xl cursor-pointer border-gray-500  ">
            <IoSearchSharp className="search-button w-5 h-5" />
            <div className="border-2 h-6 rounded ctrl-k text-xs w-13 flex justify-center items-center">Ctrl K</div>
          </div>
          <Github_Link />
        </div>
      </div>
    </>
  );
};

export default Navbar;
