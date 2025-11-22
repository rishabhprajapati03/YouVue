import React from "react";
import { useMenu } from "../context/MenuContext";
import { useThemeContext } from "../context/ThemeContext";
import { HiHome, HiMenu } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SiPodcastindex, SiYoutubeshorts } from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { TbHistory } from "react-icons/tb";
import { RiNewsLine, RiPlayList2Fill, RiShoppingBagLine } from "react-icons/ri";
import { GoVideo } from "react-icons/go";
import { SlLike } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import {
  PiCoatHangerBold,
  PiGameControllerBold,
  PiMusicNote,
} from "react-icons/pi";
import { FaFilm } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import { LuTrophy } from "react-icons/lu";
import { FaGoogleScholar } from "react-icons/fa6";
import { GiShorts } from "react-icons/gi";
import { images } from "../assets/images/assets";

const LinkButton = ({ data, onLinkClick }) => {
  const { isDarkMode } = useThemeContext();
  const { name, path, IconName } = data;
  return (
    <Link
      to={`${path}`}
      onClick={onLinkClick}
      className={`cursor-pointer flex items-center px-1 sm:px-2 lg:px-3 py-2 rounded-md  gap-2 lg:gap-3 
        ${isDarkMode ? " hover:bg-gray-700" : "hover:bg-zinc-200"}`}
    >
      {IconName && <IconName className="text-lg mr-2" />}
      <span className="">{name}</span>
    </Link>
  );
};
const SideBar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

  const { isDarkMode } = useThemeContext();
  const links = [
    { name: "Home", path: "/", IconName: IoHomeOutline },
    { name: "Shorts", path: "/", IconName: SiYoutubeshorts },
    {
      name: "Subscriptions",
      path: "/",
      IconName: MdOutlineSubscriptions,
    },
  ];
  const extraLink = [
    { name: "History", path: "/", IconName: TbHistory },
    { name: "Playlists", path: "/", IconName: RiPlayList2Fill },
    { name: "Your Videos", path: "", IconName: GoVideo },
    { name: "Watch Later", path: "/watchlater", IconName: MdOutlineWatchLater },
    { name: "Liked Videos", path: "", IconName: SlLike },
  ];

  const exploreLinks = [
    { name: "Shopping", path: "/", IconName: RiShoppingBagLine },
    { name: "Music", path: "/", IconName: PiMusicNote },
    { name: "Films", path: "/", IconName: FaFilm },
    { name: "Live", path: "/", IconName: CgMediaLive },
    { name: "Gaming", path: "/", IconName: PiGameControllerBold },
    { name: "News", path: "/", IconName: RiNewsLine },
    { name: "Sport", path: "/", IconName: LuTrophy },
    { name: "Courses", path: "/", IconName: FaGoogleScholar },
    { name: "Fashion & beauty", path: "/", IconName: PiCoatHangerBold },
    { name: "Podcasts", path: "/", IconName: SiPodcastindex },
  ];
  if (!isMenuOpen) return null;
  return (
    <aside
      className={`z-20 sm:z-30  w-full flex xl:w-64 sm:flex h-screen xl:z-20 xl:mt-16 fixed left-0 top-0   transform transition-all duration-300 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }  ${isDarkMode ? "bg-zinc-900 text-white" : "bg-white"}`}
    >
      <div className={`shrink-0 w-full px-2 sm:w-64 overflow-y-auto`}>
        <div
          className={`h-16 flex items-center gap-4 xl:hidden sticky top-0 w-full px-4  ${
            isDarkMode ? "bg-zinc-900 text-white" : "bg-white"
          }`}
        >
          <button
            className="cursor-pointer"
            onClick={() => {
              toggleMenu();
            }}
          >
            <FiMenu className="text-xl" />
          </button>
          <Link
            to={"/"}
            onClick={() => {
              closeMenu();
            }}
          >
            <img
              src={`${isDarkMode ? images.YouVueLight : images.YouVueDark}`}
              alt="YouVue"
              className="h-7 sm:h-9 w-min shrink-0 bg-transparent"
            />
          </Link>
        </div>

        {/* Home, shorts, etc. Links */}
        <div className="">
          {links &&
            links.map((d, index) => {
              return (
                <LinkButton key={index} data={d} onLinkClick={closeMenu} />
              );
            })}
        </div>

        <hr className="mx-1 sm:mx-2 lg:mx-4 my-2 text-gray-400" />

        <span className="text-lg font-semibold flex items-center px-1 sm:px-2 lg:px-4 ">
          You <IoIosArrowForward className="ml-4" />
        </span>
        {/* watch later, playlist links */}
        <div>
          {extraLink &&
            extraLink.map((d, index) => {
              return (
                <LinkButton key={index} data={d} onLinkClick={closeMenu} />
              );
            })}
        </div>

        <hr className="mx-1 sm:mx-2 lg:mx-4 my-2 text-gray-400" />

        <span className="text-lg font-semibold flex items-center px-1 sm:px-2 lg:px-4 ">
          Explore <IoIosArrowForward className="ml-4" />
        </span>
        {exploreLinks &&
          exploreLinks.map((d, index) => {
            return <LinkButton key={index} data={d} onLinkClick={closeMenu} />;
          })}
      </div>
      {/* BLACK AREA */}
      <div
        className={`hidden sm:flex xl:hidden bg-black/30 flex-1 cursor-pointer`}
        onClick={() => closeMenu()}
      ></div>
    </aside>
  );
};

export default SideBar;
