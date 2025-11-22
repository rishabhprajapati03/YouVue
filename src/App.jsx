import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import Shimmer from "./pages/Shimmer";
import { useMenu } from "./context/MenuContext";
import { useThemeContext } from "./context/ThemeContext";

const App = () => {
  const { isMenuOpen } = useMenu();
  const { isDarkMode } = useThemeContext();
  return (
    <div
      className={`transition-all duration-300 ${
        isDarkMode ? " bg-zinc-900 text-white" : "bg-white"
      }`}
    >
      <Navbar />
      <SideBar />
      <main
        className={`${
          isMenuOpen ? "xl:ml-64" : ""
        } mt-16 max-w-[1600px] mx-auto selection:bg-purple-600 selection:text-yellow-300   min-h-[calc(100vh-64px)] ${
          isDarkMode ? "bg-zinc-900 text-white" : "bg-white"
        } transition-colors duration-200`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default App;
