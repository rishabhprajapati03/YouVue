import React, { useEffect, useRef } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchList,
  removeFromWatchList,
  selectWatchLaterSlice,
} from "../redux/watchLaterslice";
import { MdOutlineWatchLater } from "react-icons/md";

const VideoMoreOptions = ({ item, isOpen, onClose }) => {
  const { isDarkMode } = useThemeContext();
  const dispatch = useDispatch();
  const { watchList } = useSelector(selectWatchLaterSlice);
  const isInWatchList = watchList.some((video) => video?.id == item?.id);
  const boxRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div
      ref={boxRef}
      className={`absolute z-40 top-0 p-3 rounded-md right-10 min-w-40 w-auto h-auto ${
        isDarkMode ? "bg-zinc-600" : "bg-stone-300"
      }`}
    >
      <span
        className="flex gap-2 items-center"
        onClick={() => {
          if (isInWatchList) {
            dispatch(removeFromWatchList(item?.id));
            onClose();
            return;
          } else {
            dispatch(addToWatchList(item));
            onClose();
            return;
          }
        }}
      >
        <MdOutlineWatchLater className="text-xl" />
        {isInWatchList ? "Remove From Watch Later" : "Save To Watch Later"}
      </span>
    </div>
  );
};

export default VideoMoreOptions;
