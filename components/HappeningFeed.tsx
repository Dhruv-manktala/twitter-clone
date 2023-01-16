import { useEffect, useState } from "react";
import { TrendingPostInterface } from "../lib/types/type";
import { TrendingPost } from "./TrendingPost";

const HappeningFeed = () => {
  const [trendingPosts, updateTrendingPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/trendingPosts")
      .then((responseReceived) => responseReceived.json())
      .then((dataReceived) => {
        updateTrendingPosts(dataReceived);
      });
  }, []);
  return (
    <div className="flex flex-col w-4/5 m-auto bg-[#202329] my-4 p-4 rounded-t-md rounded-b-md text-[#eef3f4]">
      <div className="text-lg font-extrabold">
        <h3>What&apos;s happening</h3>
      </div>
      <ul className="flex flex-col mt-3 list-none">
        {trendingPosts.map((everyPost: TrendingPostInterface) => {
          return <TrendingPost key={everyPost.id} trendingPost={everyPost} />;
        })}
      </ul>
      <div className="mt-2">
        <p className="text-sm text-[#1a98ea] cursor-pointer">SHOW MORE</p>
      </div>
    </div>
  );
};

export { HappeningFeed };
