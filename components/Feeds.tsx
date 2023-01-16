import { feedsPropType } from "../lib/types/type";
import Post from "./Post";
import Tweet from "./Tweet";

const Feeds = ({
  input,
  setInput,
  addTweet,
  data,
  toggleLike,
  toggleBookmark,
}: feedsPropType) => {
  return (
    <>
      <div className="feed overflow-auto pr-2`" style={{ width: "45%" }}>
        <Tweet input={input} setInput={setInput} addTweet={addTweet} />

        <div className="posts flex flex-col p-1 mt-2">
          {data.posts.length > 0 ? (
            data.posts.map((post, index) => {
              return (
                <>
                  <Post
                    data={post}
                    key={post.id}
                    toggleLike={toggleLike}
                    toggleBookmark={toggleBookmark}
                  />
                </>
              );
            })
          ) : (
            <p
              className="text-2xl"
              style={{ margin: "auto" }}
            >{`No ${data.currentTab} Found`}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Feeds;
