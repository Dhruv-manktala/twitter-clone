import { RxAvatar } from "react-icons/Rx";
import { FaRegComment } from "react-icons/Fa";
import { AiOutlineRetweet } from "react-icons/Ai";
import { AiOutlineHeart } from "react-icons/Ai";
import { FiBookmark } from "react-icons/Fi";
import { IoIosArrowDown } from "react-icons/Io";
import { postPropType } from "../lib/types/type";
import { FcLike } from "react-icons/Fc";
import { BsFillBookmarkHeartFill } from "react-icons/Bs";
import moment from "moment";
import { useRouter } from "next/router";

const Post = ({ data, toggleLike, toggleBookmark }: postPropType) => {
  const getDate = (date: number | string): string => {
    if (typeof date != "string") {
      return moment(date).fromNow();
    }
    return date;
  };

  const router = useRouter();

  return (
    <>
      <div className="post border-b-2 border-gray-500 w-full flex">
        <div className="avatar m-1.5">
          <RxAvatar size={30} />
        </div>

        <div className="post_info  w-full">
          <div className="post_user_info w-full flex justify-start items-center gap-2 m-1">
            <div className="post_username font-medium">{data.name}</div>
            <div className="post_time text-gray-500 text-sm">
              {" "}
              {getDate(data.time)}
            </div>
            <IoIosArrowDown className="justify-self-end" />
          </div>
          <div
            className="post_data p-1 text-gray-700 cursor-pointer"
            onClick={() => {
              router.push(`/tweet/${data.id}`);
            }}
          >
            <p>{data.postData}</p>

            {data.postImage && (
              <div
                className="post_image w-full flex justify-center align-items overflow-hidden border border-gray-300 rounded-md"
                style={{ maxHeight: "250px" }}
              >
                <img src={data.postImage} className="object-cover" />
              </div>
            )}
          </div>

          <div className="post_functionalilty flex justify-between p-2 w-10/12 items-center text-gray-500">
            <div className="comment flex justify-center items-center">
              <FaRegComment className="cursor-pointer" />
              <span className="text-xs ml-1">{data.commentCount}</span>
            </div>
            <div className="retweet flex justify-center items-center">
              <AiOutlineRetweet className="cursor-pointer" />
              <span className="text-xs ml-1">{data.retweetCount}</span>
            </div>
            <div className="like flex justify-center items-center">
              {data.isLiked ? (
                <FcLike
                  className="cursor-pointer"
                  onClick={() => {
                    toggleLike(data.id);
                  }}
                />
              ) : (
                <AiOutlineHeart
                  className="cursor-pointer"
                  onClick={() => {
                    toggleLike(data.id);
                  }}
                />
              )}
              <span className="text-xs ml-1">{data.likeCount}</span>
            </div>
            <div className="bookmark flex justify-center items-center">
              {data.isBookmarked ? (
                <BsFillBookmarkHeartFill
                  className="cursor-pointer"
                  onClick={() => {
                    toggleBookmark(data.id);
                  }}
                  color="green"
                />
              ) : (
                <FiBookmark
                  className="cursor-pointer"
                  onClick={() => {
                    toggleBookmark(data.id);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
