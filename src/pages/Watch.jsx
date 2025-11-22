import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useChannelApi from "../hooks/useChannelApi";
import useVideoApi from "../hooks/useVideoApi";
import { numberAdjust } from "../utils/utilityFunctions";
import { useThemeContext } from "../context/ThemeContext";
import { SlDislike, SlLike } from "react-icons/sl";
import { PiShareFatLight } from "react-icons/pi";
import { GoShareAndroid } from "react-icons/go";
import { LuBookmark } from "react-icons/lu";
import CommentsContainer from "../components/CommentsContainer";
import LiveChat from "../components/LiveChat";

const VideoActions = ({ isDark, videoD }) => {
  const btnClass = `flex items-center px-3 sm:px-4 rounded-full py-2 text-sm cursor-pointer ${
    isDark
      ? "bg-stone-700 text-white hover:bg-stone-600"
      : "bg-stone-200 hover:bg-stone-300 "
  }`;
  return (
    <div className="flex gap-3 text-lg my-4">
      <span
        className={`flex items-center rounded-full ${
          isDark ? "bg-stone-700 text-white  " : "bg-stone-200  "
        }`}
      >
        <span className={`${btnClass} rounded-r-none  gap-2`}>
          <SlLike className="text-lg" />{" "}
          {numberAdjust(videoD?.statistics?.likeCount)}
        </span>
        |
        <span className={`${btnClass} rounded-l-none gap-2`}>
          <SlDislike className="text-lg " />
        </span>
      </span>
      <span className={`${btnClass} gap-2`}>
        <GoShareAndroid className="text-lg" /> Share
      </span>
      <span className={`${btnClass} gap-2`}>
        <LuBookmark className="text-lg" /> Save
      </span>
    </div>
  );
};

const ChannelDetail = ({ isDark, channelD }) => {
  const { title } = channelD?.snippet || "";

  return (
    <div className="flex items-center gap-2 mt-3">
      <img
        src={channelD?.snippet?.thumbnails?.default?.url}
        alt={"C"}
        className="h-10 w-10 rounded-full shrink-0"
      />
      <span className="flex flex-col justify-center">
        <span className="font-semibold leading-5 flex-1">{title}</span>
        <span className="text-xs">
          {numberAdjust(channelD?.statistics?.subscriberCount)}
          {"  "}subscribers
        </span>
      </span>
      <button
        className={`ml-4 rounded-full px-4 py-2  text-sm font-semibold cursor-pointer ${
          isDark
            ? "bg-white text-black hover:bg-zinc-200"
            : "bg-zinc-900 text-white hover:bg-zinc-700"
        }`}
      >
        Subscribe
      </button>
    </div>
  );
};

const VideoDescription = ({ isDark, description, views, date }) => {
  const [showMore, setShowMore] = useState(false);
  const dateNtime = new Date(date);
  return (
    <div
      className={`p-1 sm:p-2 lg:p-3 ${
        isDark ? "bg-stone-700" : "bg-stone-200"
      } rounded-lg my-3 `}
    >
      <p className="font-semibold my-1">
        {views} views • {dateNtime.toDateString()}{" "}
        {dateNtime.toLocaleTimeString()}
      </p>
      <p
        className={`text-sm whitespace-pre-wrap ${
          showMore ? "" : "line-clamp-3"
        }`}
      >
        {description}
      </p>
      <span
        onClick={() => setShowMore(!showMore)}
        className="cursor-pointer font-semibold text-sm py-1 text-orange-500"
      >
        {showMore ? "show less" : "more..."}
      </span>
    </div>
  );
};

const Watch = () => {
  const [searchParams] = useSearchParams();
  const { isDarkMode } = useThemeContext();
  const videoId = searchParams.get("v");
  const { videoData } = useVideoApi(videoId);
  const { channelData } = useChannelApi(videoData?.snippet?.channelId);
  return (
    <div className="py-4 sm:p-2 flex flex-wrap">
      <div className="w-full md:w-8/12 xl:w-7/12">
        <iframe
          className="w-full aspect-video "
          src={`https://www.youtube.com/embed/` + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="mx-2 sm:px-0">
          <h2 className="text-lg font-semibold leading-6 my-2">
            {videoData?.snippet?.title}
          </h2>
          <div className="flex flex-wrap items-center justify-between">
            {channelData && (
              <ChannelDetail channelD={channelData} isDark={isDarkMode} />
            )}
            {/* Statistics likes, etc. */}
            <VideoActions isDark={isDarkMode} videoD={videoData} />
          </div>
          {videoData?.snippet?.description && (
            <VideoDescription
              description={videoData?.snippet?.description}
              isDark={isDarkMode}
              views={videoData?.statistics?.viewCount}
              date={videoData?.snippet?.publishedAt}
            />
          )}
          <CommentsContainer id={videoId} />
        </div>
      </div>
      <div className="w-full lg:w-4/12 xl:w-5/12">
        <LiveChat />
      </div>
    </div>
  );
};

export default Watch;
