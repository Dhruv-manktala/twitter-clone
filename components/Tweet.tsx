import { RxAvatar } from "react-icons/Rx";
import { HiOutlinePhotograph } from "react-icons/Hi";
import { AiOutlineGif } from "react-icons/Ai";
import { BiPoll } from "react-icons/Bi";
import { FaRegSmile } from "react-icons/Fa";
import { feedsPropType, tweetPropType } from "../lib/types/type";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/Md";
const Tweet = ({ input, setInput, addTweet }: tweetPropType) => {
  const [preview, setPreview] = useState<string | null>(null);

  const uploadFile = (e: any) => {
    console.log(e);

    let type = e?.target?.files[0]?.type.split("/")[0];
    if (type != "image") {
      return;
    }
    console.log(e.target.files[0]);

    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="tweet flex flex-col items-start w-ful">
      <div className="text-2xl px-4 py-3 font-bold border-b-2 border-gray-400 w-full ">
        Home
      </div>

      <div className="tweet-input flex justify-around w-full">
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
            className="outline-none px-2 py-2 border h-auto"
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
              <input
                type="file"
                id="file-input"
                className="hidden"
                onChange={(e) => {
                  uploadFile(e);
                }}
                onClick={(e) => {
                  // console.log(e);
                  e.currentTarget.value = "";
                }}
              />
              <label for="file-input">
                <HiOutlinePhotograph
                  size={25}
                  color="#1DA1F2"
                  className="cursor-pointer"
                />
              </label>
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
                addTweet(preview);
                setPreview(null);
              }}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
      {preview && (
        <div className="preview-image w-9/12 rounded-lg overflow-hidden self-center m-2 pt-6 relative">
          {preview && <img src={preview} className="rounded-lg" />}
          <MdOutlineCancel
            className="absolute cursor-pointer right-1 top-1"
            color="red"
            size="20"
            onClick={() => {
              setPreview(null);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Tweet;
