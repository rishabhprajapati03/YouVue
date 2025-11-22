import React from "react";
import VideoContainer from "../components/VideoContainer";
import useVideosApi from "../hooks/useVideosApi";
import VideoCategories from "../components/VideoCategories";
import Shimmer from "./Shimmer";

const Home = () => {
  const { videos, fetchMore, loading, hasLoadedInitial } = useVideosApi();
  if (loading && !hasLoadedInitial) return <Shimmer />;
  return (
    <div className="sm:p-2 w-full">
      <VideoCategories />
      <VideoContainer
        videoList={videos}
        fetchMore={fetchMore}
        loading={loading}
      />
      <hr className="text-gray-500" />
      <h2 className="w-full text-center text-lg py-6 ">
        Made with ❤️ by <b>Rishabh Prajapati</b>
      </h2>
    </div>
  );
};

export default Home;
