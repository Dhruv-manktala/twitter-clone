import Navigation from "../components/Navigation";
import Feeds from "../components/Feeds";
import Trending from "../components/Trending";
import { useEffect, useState } from "react";
import { dataType, postType } from "../lib/types/type";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [input, setInput] = useState<string>("dkddkdk");
  const [data, setData] = useState<dataType>({ posts: [], currentTab: "Home" });
  const [currentTab, setCurrentTab] = useState("Home");

  useEffect(() => {
    fetch("http://localhost:8000/posts?_sort=time&_order=desc ")
      .then((res) => res.json())
      .then((data) => {
        let posts: postType[] = data;
        let _posts = posts.filter((post) => {
          posts;
          if (currentTab == "Home") {
            return true;
          } else if (currentTab == "Liked" && post.isLiked) {
            return true;
          } else if (currentTab == "Bookmarks" && post.isBookmarked) {
            return true;
          }
          return false;
        });
        setData({ posts: _posts, currentTab: currentTab });
      });
  }, [currentTab]);

  const changeTab = (tab: string): void => {
    setCurrentTab(tab);
  };

  const addTweet = () => {
    if (input) {
      let tweet = {
        id: uuidv4(),
        name: "Fake User",
        postData: input,
        isLiked: false,
        isBookmarked: false,
        time: Date.now(),
        likeCount: 0,
        commentCount: 0,
        views: 0,
        retweetCount: 0,
        blueTick: true,
      };
      ``;

      fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...tweet,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setData({ ...data, posts: [res, ...data.posts] });
          setInput("");
        });
    }
  };

  const toggleLike = (id: number) => {
    let isLiked: boolean = false;
    let likeCount: number = 0;

    new Promise((res, rej) => {
      let _posts = data.posts.map((post) => {
        if (post.id === id && !post.isLiked) {
          isLiked = true;
          likeCount = post.likeCount;
          return { ...post, likeCount: post.likeCount + 1, isLiked: true };
        } else if (post.id === id && post.isLiked) {
          isLiked = false;
          likeCount = post.likeCount;
          return { ...post, likeCount: post.likeCount - 1, isLiked: false };
        } else {
          return post;
        }
      });
      res(_posts);
    }).then((res: any) => {
      setData({ posts: [...res], currentTab: data.currentTab });
      fetch(`http://localhost:8000/posts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isLiked: isLiked,
          likeCount: isLiked ? likeCount + 1 : likeCount - 1,
        }),
      });
    });
  };

  const toggleBookmark = (id: number) => {
    let isBookmarked: boolean = false;
    new Promise((res, rej) => {
      let _posts = data.posts.map((post) => {
        if (post.id === id && !post.isBookmarked) {
          isBookmarked = true;
          return { ...post, isBookmarked: true };
        } else if (post.id === id && post.isBookmarked) {
          isBookmarked = false;
          return { ...post, isBookmarked: false };
        } else {
          return post;
        }
      });
      res(_posts);
    }).then((res: any) => {
      setData({ posts: [...res], currentTab: data.currentTab });

      fetch(`http://localhost:8000/posts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isBookmarked: isBookmarked,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    });
  };

  return (
    <>
      <div className="homepage h-screen flex">
        <Navigation currentTab={data?.currentTab} changeTab={changeTab} />
        <Feeds
          input={input}
          setInput={setInput}
          addTweet={addTweet}
          data={data}
          toggleLike={toggleLike}
          toggleBookmark={toggleBookmark}
        />
        <Trending />
      </div>
    </>
  );
}
