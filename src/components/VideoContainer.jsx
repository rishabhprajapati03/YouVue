import { useEffect } from "react";
import VideoCard from "./VideoCard";

const VideoContainer = ({ videoList, fetchMore, loading }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 500
      ) {
        fetchMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, fetchMore]);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-4">
        {videoList &&
          videoList.map((video) => <VideoCard key={video.id} data={video} />)}
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-12">
        {loading && <h2>Loading More TIck Tick Tick..</h2>}
      </div>
    </>
  );
};

export default VideoContainer;
