import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useThemeContext } from "../context/ThemeContext";
import useVideoCategories from "../hooks/useVideoCategories";
import { useEffect, useRef, useState } from "react";

const VideoCategories = () => {
  const { categoryList, isLoading, error } = useVideoCategories();
  const [showForwardBtn, setShowForwardBtn] = useState(false);
  const [showBackBtn, setShowBackBtn] = useState(false);
  const { isDarkMode } = useThemeContext();
  const scrollRef = useRef();

  const handleBack = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };
  const handleForward = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setShowBackBtn(scrollLeft > 0);

    setShowForwardBtn(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    let element = scrollRef.current;
    checkScroll();
    element.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      element.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  });

  if (error) return null;
  if (isLoading) return <h2>Loading....</h2>;

  return (
    <div
      className=" max-w-full overflow-x-scroll scroll-smooth px-0 relative"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {showBackBtn && (
        <button
          onClick={() => {
            handleBack();
          }}
          className={`p-1.5 mx-0.5 z-10 transform -translate-y-1/2 transtion-colors duration-300 rounded-full text-xl absolute cursor-pointer left-0 top-1/2 ${
            isDarkMode
              ? "bg-black text-white border-zinc-700 hover:bg-zinc-700"
              : "bg-white text-black border-zinc-300 hover:bg-zinc-300 "
          }`}
        >
          <IoIosArrowBack className="shrink-0" />
        </button>
      )}
      {showForwardBtn && (
        <button
          onClick={() => {
            handleForward();
          }}
          className={`p-1.5 mx-0.5 z-10 transform -translate-y-1/2 transtion-colors duration-300  rounded-full text-xl absolute cursor-pointer right-0 top-1/2 ${
            isDarkMode
              ? "bg-black text-white border-zinc-700 hover:bg-zinc-700"
              : "bg-white text-black border-zinc-300 hover:bg-zinc-300 "
          }`}
        >
          <IoIosArrowForward className="shrink-0" />
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-hidden flex-1 whitespace-nowrap my-3"
      >
        {categoryList &&
          categoryList.map((category) => {
            return (
              <button
                key={category?.id}
                className={`px-3 mx-2 py-2 text-sm font-semibold rounded-md transtion-colors duration-300 ${
                  isDarkMode ? "bg-zinc-700" : "bg-stone-200"
                }`}
              >
                {category?.snippet?.title}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default VideoCategories;
