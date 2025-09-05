import React, { useContext } from "react";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import  ThemeContext  from "../../..//ThemeContext";
function ThemeToggleButton() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className="rounded-4xl w-9 h-9 cursor-pointer border-2 border-gray-500 shadow-gray-500 flex justify-center items-center hover:bg-gray-400"
    >
      {darkTheme ? <LuMoonStar /> : <MdOutlineWbSunny className="text-black"/>}
    </div>
  );
}

export default ThemeToggleButton;
