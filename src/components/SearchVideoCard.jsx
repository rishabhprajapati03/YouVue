import React, { useEffect, useRef, useState } from "react";
import { formatTime } from "../utils/utilityFunctions";
import { useThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import VideoMoreOptions from "./VideoMoreOptions";

const SearchVideoCard = ({ data }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { isDarkMode } = useThemeContext();
  const { title, channelTitle, publishedAt, description } = data?.snippet || "";
  const hoverTimer = useRef(null);
  useEffect(() => {
    return () => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
      }
    };
  }, []);
  return (
    <Link to={`/watch?v=` + data?.id?.videoId}>
      <div
        className={` w-full md:flex gap-2 py-2 sm:px-2  sm:rounded-xl cursor-pointer ${
          isDarkMode ? "hover:bg-pink-100/5" : "hover:bg-pink-100/90"
        }`}
      >
        {/* Thumnail */}
        <div className="relative shrink-0">
          <img
            onMouseEnter={() => {
              hoverTimer.current = setTimeout(() => {
                setIsImageHovered(true);
              }, 1000);
            }}
            onMouseLeave={() => {
              clearTimeout(hoverTimer.current);
            }}
            className="w-full md:h-52 lg:h-60 xl:h-64 aspect-video sm:rounded-xl"
            src={data?.snippet?.thumbnails?.medium?.url}
            alt={title}
          />

          {/* play video on hover */}
          {isImageHovered && (
            <div
              onMouseLeave={() => {
                setIsImageHovered(false);
              }}
              className="w-full aspect-video absolute z-20 top-0 left-0"
            >
              <iframe
                className="w-full h-full pointer-events-none "
                src={`https://www.youtube.com/embed/${data?.id?.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          )}
        </div>
        {/* Content Details */}

        <div className="mt-2 flex gap-2 flex-1 break-all relative">
          <div className=" pl-2">
            <p className="font-semibold text-lg w-9 h-9 md:hidden flex items-center justify-center bg-pink-400 text-white rounded-full">
              {(channelTitle && channelTitle[0]) || "A"}
            </p>
          </div>
          <div className="flex-1 wrap-break-word">
            <h2 className="font-semibold line-clamp-2 leading-6 ">{title}</h2>
            <h2
              className={`my-1 text-sm flex gap-2 items-center ${
                isDarkMode ? "text-zinc-200" : "text-zinc-500"
              }`}
            >
              <p className="font-semibold text-md w-5 h-5 hidden md:flex  items-center justify-center bg-pink-400 text-white rounded-full">
                {(channelTitle && channelTitle[0]) || "A"}
              </p>{" "}
              {channelTitle}
            </h2>
            <span
              className={`text-sm font-medium ${
                isDarkMode ? "text-zinc-200" : "text-zinc-500"
              }`}
            >
              <span>{formatTime(publishedAt)} ago</span>
            </span>
            <span className="text-sm hidden md:flex">
              <span className="line-clamp-2"> {description}</span>
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

export default SearchVideoCard;
