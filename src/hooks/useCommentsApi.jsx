import { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/constants";

const useCommentsApi = (id) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [commentsList, setCommentsList] = useState([]);
  useEffect(() => {
    const api = COMMENTS_API.replace("REPLACE_ME", id);
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(api);
        if (!res.ok) throw new Error("API failed to Fetch :(");
        const json = await res.json();
        setCommentsList(json?.items);
      } catch (err) {
        console.log("ERRor :", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  return { commentsList, error, isLoading };
};
export default useCommentsApi;
