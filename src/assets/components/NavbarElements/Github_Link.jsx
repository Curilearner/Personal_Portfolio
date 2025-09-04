import React from "react";
import { IoLogoGithub } from "react-icons/io5";
const Github_Link = () => {
  return (
    <>
      <div className="rounded-4xl w-9 h-9 cursor-pointer border-2 border-gray-500 shadow-gray-500 flex justify-center items-center hover:bg-gray-400">
        <a href="https://github.com/Curilearner" target="_blank">
          <IoLogoGithub className="w-6 h-6 bg-black rounded-3xl border-0" />
        </a>
      </div>
    </>
  );
};

export default Github_Link;
