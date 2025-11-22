import React from "react";

const ShimmerCard = () => {
  return (
    <div className="animate-pulse w-full min-w-40 p-2">
      <div className="bg-stone-200 rounded-xl w-full aspect-video"></div>

      <div className="flex mt-3 gap-3">
        <div className="h-10 w-10 rounded-full bg-stone-200 shrink-0"></div>

        <div className="flex-1 flex flex-col gap-2">
          <div className="h-4 bg-stone-200 rounded"></div>
          <div className="h-3 bg-stone-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  );
};

export default Shimmer;
