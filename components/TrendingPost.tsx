import { TrendingPostInterface } from "../lib/types/type";
import { BsThreeDots as More } from "react-icons/Bs";
import { tweetFormatter } from "../utilities";
const TrendingPost = ({
  trendingPost,
}: {
  trendingPost: TrendingPostInterface;
}) => {
  const { trending_global, trending_person_name, tweet_count, topic } =
    trendingPost;

  return (
    <li className="flex flex-row my-2 justify-between">
      <div className="flex flex-col text-[#eef3f4]">
        <div className="flex gap-1">
          {trending_global ? (
            <>
              <p className="text-[#6e7278] text-xs">{topic}</p>
              <p className="text-[#6e7278] text-xs">Trending</p>
            </>
          ) : null}
          {!trending_global ? (
            <p className="text-[#6e7278] text-xs">Trending In India</p>
          ) : null}
        </div>
        <div>
          <p className="text-xl">
            {tweet_count > 10000 ? "#" : ""}
            {trending_person_name}
          </p>
        </div>
        <div className="text-[#6e7278] text-xs">
          {tweetFormatter(tweet_count)} tweets
        </div>
      </div>
      <div className="text-[#6e7278] my-1 cursor-pointer">
        <More />
      </div>
    </li>
  );
};
export { TrendingPost };
