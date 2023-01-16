import { useEffect, useState } from "react";

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
    <div className="flex flex-col w-4/5 m-auto bg-[#202329] my-4 p-4 rounded-t-md rounded-b-md">
      <h3>What`{'s'} happening</h3>
    </div>
  );
};

export { HappeningFeed };
