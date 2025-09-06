import React from "react";
import { useContext } from "react";
import ThemeContext from "../../..//ThemeContext";
const Banner = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="w-full h-full  flex justify-center items-center">
        <img
          className=" h-96 ml-3.5"
          src={
            darkTheme
              ? "/Images/Portfolio-Blackbg-banner.svg"
              : "/Images/Portfolio-Whitebg-banner.svg"
          }
          alt="SK-Banner-Dark-Banner"
        />
      </div>
    </>
  );
};

export default Banner;
