import React, { useEffect, useRef, useState } from "react";
import { formatTime, numberAdjust } from "../utils/utilityFunctions";
import { useThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import VideoMoreOptions from "./VideoMoreOptions";

const VideoCard = ({ data }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { isDarkMode } = useThemeContext();
  const { title, channelTitle, publishedAt } = data?.snippet || "";
  const { viewCount } = data?.statistics || 0;
  const hoverTimer = useRef(null);
  useEffect(() => {
    return () => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
      }
    };
  }, []);
  return (
    <Link to={`/watch?v=` + data?.id}>
      <div
        className={` min-w-40 py-2 sm:px-2  sm:rounded-xl cursor-pointer ${
          isDarkMode ? "hover:bg-pink-100/5" : "hover:bg-pink-100/90"
        }`}
      >
        {/* Thumnail */}
        <div className="relative">
          <img
            onMouseEnter={() => {
              hoverTimer.current = setTimeout(() => {
                setIsImageHovered(true);
              }, 1000);
            }}
            onMouseLeave={() => {
              clearTimeout(hoverTimer.current);
            }}
            className="w-full aspect-video sm:rounded-xl"
            src={data?.snippet?.thumbnails?.medium?.url}
            alt={title}
          />

          {/* play video on hover */}
          {isImageHovered && (
            <div
              onMouseLeave={() => {
                setIsImageHovered(false);
              }}
              className="w-full aspect-video absolute z-10 top-0 left-0"
            >
              <iframe
                className="w-full h-full pointer-events-none "
                src={`https://www.youtube.com/embed/${data?.id}?autoplay=1&mute=1&controls=0&modestbranding=1`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          )}
        </div>
        {/* Content Details */}

        <div className="mt-2 flex gap-2 relative">
          <div className="shrink-0 pl-2">
            <p className="font-semibold text-lg w-9 h-9  flex items-center justify-center bg-pink-400 text-white rounded-full">
              {(channelTitle && channelTitle[0]) || "A"}
            </p>
          </div>
          <div className="flex-1">
            <h2 className="font-semibold line-clamp-2 leading-6 ">{title}</h2>
            <h2
              className={`my-1 text-sm ${
                isDarkMode ? "text-zinc-200" : "text-zinc-500"
              }`}
            >
              {channelTitle}
            </h2>
            <span
              className={`flex gap-2 text-sm ${
                isDarkMode ? "text-zinc-200" : "text-zinc-500"
              }`}
            >
              <span>{numberAdjust(viewCount)}</span>•
              <span>{formatTime(publishedAt)}</span>
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowMore((prev) => !prev);
            }}
            className={`shrink-0 mr-1 rounded-full cursor-pointer  h-min aspect-square p-1.5  flex items-center justify-center ${
              isDarkMode ? "hover:bg-zinc-500" : "hover:bg-gray-200"
            }`}
          >
            <BsThreeDotsVertical className="" />
            {showMore && (
              <VideoMoreOptions
                item={data}
                isOpen={showMore}
                onClose={() => setShowMore(false)}
              />
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
