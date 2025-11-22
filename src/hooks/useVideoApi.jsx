import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constants";

const useVideoApi = (id) => {
  const [videoData, setVideoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = VIDEO_API.replace("REPLACE_ME", id);
    const fetchDetails = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(api);
        if (!res.ok) throw new Error("Failed to Fetch Api");
        const json = await res.json();
        setVideoData(json?.items?.[0]);
      } catch (err) {
        console.log("Error is: ", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) {
      fetchDetails();
    }
  }, [id]);
  return { videoData, isLoading, error };
};

export default useVideoApi;
