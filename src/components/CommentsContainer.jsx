import React from "react";
import useCommentsApi from "../hooks/useCommentsApi";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { formatTime } from "../utils/utilityFunctions";
import { useThemeContext } from "../context/ThemeContext";
import { SlDislike, SlLike } from "react-icons/sl";
import { BiDislike, BiLike } from "react-icons/bi";

const Comment = ({ comment, isReply }) => {
  const { isDarkMode } = useThemeContext();
  let snippet = "";
  if (isReply) {
    snippet = comment?.snippet;
  } else {
    snippet = comment?.snippet?.topLevelComment?.snippet;
  }
  const {
    textOriginal,
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    likeCount,
  } = snippet || "";

  return (
    <div
      className={`w-full mb-2 ${
        isReply ? "mt-2" : "mt-4"
      } px-1 sm:px-2  flex gap-2 md:gap-3`}
    >
      <img
        src={authorProfileImageUrl}
        className="h-7  w-7 md:h-8 md:w-8  rounded-full shrink-0 my-1"
      />
      <div className="w=full flex-1">
        <div className="flex justify-between w-full items-center">
          <span className="text-sm ">
            <span className="font-semibold mr-3">{authorDisplayName}</span>
            <span
              className={`${isDarkMode ? "text-zinc-300" : "text-zinc-500"}`}
            >
              {formatTime(publishedAt)} ago
            </span>
          </span>

          <button
            onClick={() => {}}
            className={`shrink-0 mr-1 rounded-full cursor-pointer  h-min aspect-square p-1.5  flex items-center justify-center ${
              isDarkMode ? "hover:bg-zinc-500" : "hover:bg-gray-200"
            }`}
          >
            <BsThreeDotsVertical className="" />
          </button>
        </div>
        <span className="text-[15px] wrap-break-word break-all leading-5">
          {textOriginal}
        </span>
        <span className="flex gap-3 items-center text-sm mt-1">
          <span className="flex gap-2 items-center">
            <BiLike className="text-base" />
            {likeCount}
          </span>
          <BiDislike className="text-base" />
          <span>Reply</span>
        </span>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  const { isDarkMode } = useThemeContext();
  return (
    <div>
      {comments.map((d) => {
        return (
          <>
            <Comment key={d?.id} comment={d} isReply={false} />
            {d?.replies?.comments?.length != 0 && (
              <div
                className={`ml-5 pl-5 border-l ${
                  isDarkMode ? "border-l-gray-600" : "border-l-gray-300"
                }`}
              >
                {d?.replies?.comments?.map((d) => {
                  return <Comment key={d?.id} comment={d} isReply={true} />;
                })}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

const CommentsContainer = ({ id }) => {
  const { commentsList, error, isLoading } = useCommentsApi(id);
  if (error) return null;
  if (isLoading) return <h2>Loading</h2>;
  return (
    <div className="w-full py-3">
      <h2 className="text-xl font-bold">Comments</h2>
      {commentsList && <CommentList comments={commentsList} />}
    </div>
  );
};

export default CommentsContainer;
