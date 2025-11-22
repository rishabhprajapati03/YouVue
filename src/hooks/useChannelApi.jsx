import React, { useEffect, useState } from "react";
import { CHANNEL_API } from "../utils/constants";

const useChannelApi = (id) => {
  const [channelData, setChannelData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = CHANNEL_API.replace("REPLACE_ME", id);
    const fetchDetails = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(api);
        if (!res.ok) throw new Error("Failed to Fetch Api");
        const json = await res.json();
        setChannelData(json?.items?.[0]);
        console.log(json?.items?.[0]);
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
  return { channelData, isLoading, error };
};

export default useChannelApi;
