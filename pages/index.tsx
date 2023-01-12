import Navigation from "../components/Navigation";
import Feeds from "../components/Feeds";
import Trending from "../components/Trending";
import { useEffect, useState } from "react";
import { dataType, postType } from "../lib/types/type";

/**
 * @description Twitter Main page
 * @returns
 * @param
 */
export default function Home() {
  const [input, setInput] = useState<string>("dkddkdk");
  const [data, setData] = useState<dataType>({ posts: [], currentTab: "Home" });

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => {
        let posts: postType[] = data;
        setData({ posts, currentTab: "Home" });
      });
  }, []);

  const changeTab = (tab: string): void => {
    setData({ ...data, currentTab: tab });
  };

  // add tweet
  const addTweet = () => {
    if (input) {
      console.log(input);
    }
  };

  return (
    <>
      <div className="homepage h-screen flex">
        <Navigation currentTab={data?.currentTab} changeTab={changeTab} />
        <Feeds input={input} setInput={setInput} addTweet={addTweet} />
        <Trending />
      </div>
    </>
  );
}
