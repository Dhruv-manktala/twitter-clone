import { HappeningFeed } from "./HappeningFeed";
import { Search } from "./Search";

const Trending = () => {
  return (
    <>
      <div className="Trending pt-6 px-9 bg-[#000000]" style={{ width: "30%" }}>
        <Search />
        <HappeningFeed />
      </div>
    </>
  );
};

export default Trending;
