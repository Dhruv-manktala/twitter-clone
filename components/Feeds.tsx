import { feedsPropType } from "../lib/types/type";
import Tweet from "./Tweet";

const Feeds = ({ input, setInput, addTweet }: feedsPropType) => {
  return (
    <>
      <div className="feeds bg-green-500" style={{ width: "45%" }}>
        <Tweet input={input} setInput={setInput} addTweet={addTweet} />
      </div>
    </>
  );
};

export default Feeds;
