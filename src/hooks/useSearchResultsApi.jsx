import { useEffect, useState } from "react";
import { SEARCH_RESULTS_API } from "../utils/constants";

const useSearchResultsApi = (query) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = SEARCH_RESULTS_API.replace("REPLACE_ME", query);

    const fetchResults = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(api);
        if (!res.ok) throw new Error("API failed to Fetch");
        const json = await res.json();
        setResults(json?.items || []);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);
  return { results, isLoading, error };
};
export default useSearchResultsApi;
