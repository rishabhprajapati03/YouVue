import { useEffect, useState } from "react";
import { VIDEO_CATEGORIES_API } from "../utils/constants";

const useVideoCategories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(VIDEO_CATEGORIES_API);
        if (!res.ok) throw new Error("API FAILED to Fetch DEtails");
        const json = await res.json();
        setCategoryList(json?.items);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, []);
  return {
    categoryList,
    isLoading,
    error,
  };
};
export default useVideoCategories;
