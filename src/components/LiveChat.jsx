import React, { useEffect, useState } from "react";
import { BsChatLeftText, BsSendFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { addMessage } from "../redux/livechatslice";
import {
  generateRandomName,
  generateRandomText,
} from "../utils/utilityFunctions";
import { useThemeContext } from "../context/ThemeContext";

const LiveChatMessage = ({ data }) => {
  const { isDarkMode } = useThemeContext();
  const { name, text } = data || {};
  return (
    <div
      className={`flex py-1.5 px-2 sm:pl-4 justify-between gap-2  group ${
        isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-200"
      }`}
    >
      <div className="shrink-0 h-6 w-6 sm:mr-1 flex items-center justify-center bg-gray-500 text-white font-semibold rounded-full ">
        {name?.[0] || "A"}
      </div>
      <div className="flex-1 text-sm">
        <span className="flex gap-3 text-xs">
          <span className=" ">
            <span className="mr-2 font-semibold">{name}</span>
            {text}
          </span>
        </span>
      </div>
      <div className="shrink-0 opacity-0 items-center group-hover:opacity-100 justify-center">
        <BsThreeDotsVertical className="hover:bg-gray-300 rounded-full px-1 text-xl cursor-pointer" />
      </div>
    </div>
  );
};
const LiveChat = () => {
  const [message, setMessage] = useState("");
  const { isDarkMode } = useThemeContext();
  const chatMessage = useSelector((store) => store.livechat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          text: generateRandomText(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div
      className={`w-full flex flex-col m-2 h-[50vh]  rounded-t-lg overflow-hidden ${
        isDarkMode
          ? "bg-zinc-800 border-zinc-500 text-white"
          : "bg-gray-100 border border-gray-300"
      }
    }`}
    >
      <span className="w-full flex gap-5 items-center shrink-0 py-2 px-2 sm:px-4 sm:py-2 text-xl font-semibold border-b border-gray-300">
        <BsChatLeftText /> Live Chat
      </span>
      <div className="overflow-y-scroll flex-1 flex flex-col-reverse">
        {chatMessage?.map((d, index) => (
          <LiveChatMessage key={index} data={d} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (message.length == 0) {
            alert("Message Enter Karo");
            return;
          }
          dispatch(addMessage({ name: "UnRegistered", text: message }));
          setMessage("");
        }}
        className="shrink-0 w-full px-2 sm:px-4 py-2 border-t flex items-center border-gray-300"
      >
        <input
          className={`px-3 py-2  rounded-full text-sm flex-1 focus:outline-0 ${
            isDarkMode ? "bg-stone-700" : "bg-stone-200"
          }`}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Send a message"
        />
        <button type="submit">
          <BsSendFill className="text-xl shrink-0 ml-3 mr-1 text-gray-600 hover:text-gray-800 cursor-pointer" />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
