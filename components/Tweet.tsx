import { RxAvatar } from "react-icons/Rx";
import { HiOutlinePhotograph } from "react-icons/Hi";
import { AiOutlineGif } from "react-icons/Ai";
import { BiPoll } from "react-icons/Bi";
import { FaRegSmile } from "react-icons/Fa";
import { feedsPropType, tweetPropType } from "../lib/types/type";
const Tweet = ({ input, setInput, addTweet }: tweetPropType) => {
  return (
    <div className="tweet">
      <div className="text-2xl px-4 py-3 font-bold border-b-2 border-gray-400">
        Home
      </div>

      <div className="tweet-input flex justify-around ">
        <div
          className="profile flex justify-center item-center "
          style={{ width: "10%" }}
        >
          <RxAvatar size={40} className="mt-3" />
        </div>

        <div className="input mt-2 relative" style={{ width: "90%" }}>
          <textarea
            name="input"
            value={input}
            className="outline-none px-2 py-2 border"
            rows={4}
            style={{
              width: "100%",
              resize: "none",
            }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter your tweet"
          ></textarea>

          <div className="functions flex justify-between items-center w-full absolute bottom-1 ml-1">
            <div className="flex gap-2">
              <HiOutlinePhotograph
                size={25}
                color="#1DA1F2"
                className="cursor-pointer"
              />
              <AiOutlineGif
                size={25}
                color="#1DA1F2"
                className="cursor-pointer"
              />
              <BiPoll size={25} color="#1DA1F2" className="cursor-pointer" />
              <FaRegSmile
                size={25}
                color="#1DA1F2"
                className="cursor-pointer"
              />
            </div>

            <button
              className="text-white text-md font-medium bg-blue-500 px-6 py-1.5 m-2 rounded-full self-end"
              onClick={() => {
                addTweet();
              }}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
