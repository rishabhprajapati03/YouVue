import React, { useEffect, useState } from "react";
import { SEARCH_AUTOCOMPLETE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  cacheSearchSuggestion,
  selectSearchSuggestion,
} from "../redux/suggestionSearchslice";

const useSearchAutoCompleteApi = (query) => {
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const suggestionCache = useSelector(selectSearchSuggestion);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          SEARCH_AUTOCOMPLETE_API + encodeURIComponent(query)
        );
        if (!res.ok) throw new Error("Failed to Fetch api");
        const json = await res.json();
        setSuggestions(json[1] || []);
        dispatch(cacheSearchSuggestion({ [query]: json[1] }));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    const timer = setTimeout(() => {
      if (suggestionCache[query]) {
        setSuggestions(suggestionCache[query]);
      } else {
        fetchDetails();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);
  return { suggestions, error, isLoading };
};

export default useSearchAutoCompleteApi;
