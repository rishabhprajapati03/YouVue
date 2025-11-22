import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";

const SearchSuggestions = ({ data }) => {
  const { isDarkMode } = useThemeContext();
  return (
    <div
      className={`absolute translate-y-10   w-full max-h-screen overflow-y-auto  rounded-lg border-x  ${
        isDarkMode
          ? "bg-zinc-900 border-zinc-700 shadow-xs shadow-zinc-200"
          : "bg-white shadow-xs shadow-zinc-500 border-zinc-200"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      {data &&
        data.map((d, index) => {
          return (
            <Link
              key={index}
              to={`/results?search_query=${encodeURIComponent(d)}`}
              className={`flex  rounded-lg m-2 ${
                isDarkMode ? "hover:bg-zinc-700" : "hover-bg-zinc-200"
              }`}
            >
              <RiSearchLine className="mt-1 shrink-0 mx-2 text-lg" /> {d}
            </Link>
          );
        })}
    </div>
  );
};

export default SearchSuggestions;
