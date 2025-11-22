import React, { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useMenu } from "../context/MenuContext";
import ThemeButton from "./ThemeButton";
import { useThemeContext } from "../context/ThemeContext";
import { FaUserCircle } from "react-icons/fa";
import { images } from "../assets/images/assets";
import Searchbar from "./Searchbar";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showSearchBarOnClick, setShowSearchBarOnClick] = useState(false);
  const { toggleMenu } = useMenu();
  const { isDarkMode } = useThemeContext();

  return (
    <nav
      className={`z-20 h-16 px-3 sm:px-4 lg:px-6 fixed top-0 left-0 w-full flex justify-between items-center 
        backdrop-blur-lg ${
          isDarkMode ? "bg-zinc-900 text-white " : "bg-white/90 "
        } transition-colors duration-200`}
    >
      <div className="flex items-center gap-4 shrink-0 ">
        <button
          className="cursor-pointer"
          onClick={() => {
            toggleMenu();
          }}
        >
          <FiMenu className="text-xl" />
        </button>
        <Link to={"/"}>
          <img
            src={`${isDarkMode ? images.YouVueLight : images.YouVueDark}`}
            alt="YouVue"
            className="h-7 sm:h-9 w-min shrink-0 bg-transparent"
          />
        </Link>
      </div>
      <div
        className={`  md:flex items-center md:rounded-full transition-all duration-300 ${
          showSearchBarOnClick
            ? "flex z-40 absolute top-0 left-0 h-16 w-screen  px-6 gap-6"
            : "hidden relative"
        } ${isDarkMode ? "bg-zinc-900" : "bg-white"}`}
      >
        {showSearchBarOnClick && (
          <IoArrowBackOutline
            onClick={() => setShowSearchBarOnClick(false)}
            className="shrink-0 cursor-pointer"
          />
        )}
        <Searchbar />
      </div>
      <div className="flex gap-4 md:gap-6  items-center">
        <FiSearch
          onClick={() => setShowSearchBarOnClick(true)}
          className="md:hidden mx-2 text-xl cursor-pointer"
        />
        <ThemeButton />
        <FaUserCircle className="text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;
