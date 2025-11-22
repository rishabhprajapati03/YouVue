import React from "react";
import { useThemeContext } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
  const { isDarkMode, setDarkMode } = useThemeContext();
  return (
    <div
      onClick={() => setDarkMode(!isDarkMode)}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition 
      ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}
    >
      <div
        className={`w-5 h-5 rounded-full bg-white flex items-center   justify-center transition-transform 
        ${
          isDarkMode
            ? "translate-x-7 text-yellow-400"
            : "translate-x-0 text-yellow-600"
        }`}
      >
        {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
      </div>
    </div>
  );
};

export default ThemeButton;
