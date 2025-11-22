import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cacheInitialVideos,
  cacheMoreVideos,
  selectVideosSlice,
} from "../redux/videosSlice";
import { MOST_POPULAR_VIDEOS } from "../utils/constants";

const useVideosApi = () => {
  const dispatch = useDispatch();
  const { mostPopular, nextPageToken, hasLoadedInitial } =
    useSelector(selectVideosSlice);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetching = useRef(false);

  const fetchInitialVideos = async () => {
    if (hasLoadedInitial || fetching.current) return;

    fetching.current = true;
    try {
      setLoading(true);
      const res = await fetch(MOST_POPULAR_VIDEOS);

      const json = await res.json();

      dispatch(cacheInitialVideos(json));
    } catch (err) {
      setError(err);
    } finally {
      fetching.current = false;
      setLoading(false);
    }
  };

  const fetchMore = async () => {
    if (!nextPageToken || fetching.current) return;

    fetching.current = true;
    try {
      setLoading(true);
      const res = await fetch(
        `${MOST_POPULAR_VIDEOS}&pageToken=${nextPageToken}`
      );

      const json = await res.json();

      dispatch(cacheMoreVideos(json));
    } catch (err) {
      setError(err);
    } finally {
      fetching.current = false;
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialVideos();
  }, []);

  return {
    videos: mostPopular,
    loading,
    error,
    fetchMore,
    hasLoadedInitial,
  };
};

export default useVideosApi;
