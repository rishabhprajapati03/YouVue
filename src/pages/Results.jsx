import React from "react";
import { useSearchParams } from "react-router-dom";
import useSearchResultsApi from "../hooks/useSearchResultsApi";
import SearchVideoCard from "../components/SearchVideoCard";

const Results = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const { results, isLoading, error } = useSearchResultsApi(query);
  if (isLoading)
    return (
      <span className="absolute z-30 top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2">
        Loading...
      </span>
    );
  if (error) return <span> Error in fetching Results</span>;
  return (
    <div className="mx-auto w-full lg:w-10/12 xl:w-9/12 ">
      {results &&
        results.map((card, index) => {
          return (
            <SearchVideoCard key={index || card?.id?.videoId} data={card} />
          );
        })}
    </div>
  );
};

export default Results;
