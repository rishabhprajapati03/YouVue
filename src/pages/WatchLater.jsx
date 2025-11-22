import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearWatchList,
  selectWatchLaterSlice,
} from "../redux/watchLaterslice";
import SearchVideoCard from "../components/SearchVideoCard";

const WatchLater = () => {
  const dispatch = useDispatch();
  const { watchList, total } = useSelector(selectWatchLaterSlice);
  return (
    <div className="sm:p-2">
      <div className="p-2 ">
        <h2 className="text-xl font-semibold">Watch Later [{total}]</h2>
        {watchList.length !== 0 && (
          <button
            onClick={() => {
              dispatch(clearWatchList());
            }}
            className="my-1 px-4 py-2 border border-zinc-300 rounded-full text-sm font-semibold bg-zinc-200"
          >
            Clear All
          </button>
        )}
      </div>
      {watchList && (
        <div>
          {watchList.map((item, index) => {
            return <SearchVideoCard key={index} data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default WatchLater;
