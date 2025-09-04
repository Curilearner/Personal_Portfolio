import React from 'react'
import { useState } from 'react'
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
function ThemeToggleButton() {
  const [theme, settheme] = useState(true);
  return (
    <>
     {theme?<LuMoonStar />: <MdOutlineWbSunny/>}
    </>
  )
}

export default ThemeToggleButton