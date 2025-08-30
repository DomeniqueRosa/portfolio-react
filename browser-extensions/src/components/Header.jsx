import React, { useState } from "react";
import Sun from "../assets/images/icon-sun.svg";
import Moon from "../assets/images/icon-moon.svg";
import Logo from "../assets/images/logo.svg"
export default function Header({isDark, handTheme}) {
  
  return (
    <div className="m-2 rounded-md p-2 flex justify-between items-center bg-neutral-0 w-[98%] shadow dark:bg-neutral-800">
      <div>
        <img src={Logo} alt="" />
      </div>
      <button className="p-2 dark:bg-neutral-700 shadow bg-neutral-100 rounded-md dark:hover:bg-neutral-600 hover:bg-neutral-300" onClick={handTheme}>
        <img src={isDark ? Sun : Moon} alt="" />
      </button>
    </div>
  );
}
