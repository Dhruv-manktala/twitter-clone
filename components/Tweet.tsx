import { RxAvatar } from "react-icons/Rx";
import { HiOutlinePhotograph } from "react-icons/Hi";
import { AiOutlineGif } from "react-icons/Ai";
import { BiPoll } from "react-icons/Bi";
import { FaRegSmile } from "react-icons/Fa";
import { feedsPropType } from "../lib/types/type";
const Tweet = ({ input, setInput, addTweet }: feedsPropType) => {
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

        <div className="input mt-2" style={{ width: "90%" }}>
          <textarea
            name="input"
            value={input}
            className="outline-none px-2 py-2"
            rows={3}
            style={{
              width: "100%",
            }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></textarea>

          <div className="functions flex justify-between items-center">
            <div className="flex gap-2">
              <HiOutlinePhotograph size={25} color="#1DA1F2" />
              <AiOutlineGif size={25} color="#1DA1F2" />
              <BiPoll size={25} color="#1DA1F2" />
              <FaRegSmile size={25} color="#1DA1F2" />
            </div>

            <button
              className="text-white text-md font-medium bg-blue-500 px-6 py-1.5 rounded-full self-end"
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
