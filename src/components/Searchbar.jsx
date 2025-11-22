import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useThemeContext } from "../context/ThemeContext";
import useSearchAutoCompleteApi from "../hooks/useSearchAutoCompleteApi";
import SearchSuggestions from "./SearchSuggestions";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const { isDarkMode } = useThemeContext();
  const [inputQuery, setInputQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const navigate = useNavigate();
  const { suggestions } = useSearchAutoCompleteApi(inputQuery);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/results?search_query=" + inputQuery);
  };
  const handleInputOnFocus = () => {
    setShowSuggestion(true);
  };
  const handleInputOnBlur = () => {
    setTimeout(() => setShowSuggestion(false), 500);
  };
  return (
    <form
      onSubmit={handleOnSubmit}
      className={`flex w-20 h-9 sm:w-52 md:w-72 lg:w-96 xl:w-[500px] rounded-full flex-1`}
    >
      <div className="h-full w-full flex relative">
        <input
          type="text"
          className={`border border-gray-300 px-3 w-full md:min-w-40 transition-all duration-300 rounded-l-full    focus:outline-blue-500/70 ${
            isDarkMode
              ? " border-gray-600 bg-zinc-900"
              : "bg-white border-gray-300"
          }`}
          name="search"
          placeholder="Search.."
          autoComplete="off"
          value={inputQuery}
          onChange={(e) => {
            setInputQuery(e.target.value);
          }}
          onFocus={() => handleInputOnFocus()}
          onBlur={() => handleInputOnBlur()}
        />
        {showSuggestion && <SearchSuggestions data={suggestions} />}
      </div>

      <button
        type="submit"
        onClick={() => {
          handleOnSubmit;
        }}
        className={`px-4 flex-1 py-1 h-full border transition-all duration-300 rounded-r-full border-l-0 ${
          isDarkMode
            ? "bg-gray-800 border-gray-600"
            : "border-gray-300 bg-gray-100 text-gray-500"
        }`}
      >
        <FiSearch />
      </button>
    </form>
  );
};

export default Searchbar;
