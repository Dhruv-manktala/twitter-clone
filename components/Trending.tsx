import { HappeningFeed } from "./HappeningFeed";
import { Dispatch, SetStateAction } from "react";
import { Search } from "./Search";
import { UserInterface } from "../lib/types/type";

const Trending = ({
  profileFlag,
  updateProfileFlag,
  profileSelected,
  updateProfileSelected,
}: {
  profileFlag: boolean;
  updateProfileFlag: Dispatch<SetStateAction<boolean>>;
  profileSelected: UserInterface;
  updateProfileSelected: Dispatch<SetStateAction<UserInterface>>;
}) => {
  return (
    <>
      <div className="Trending pt-6 px-9 bg-[#000000]" style={{ width: "30%" }}>
        <Search
          profileFlag={profileFlag}
          updateProfileFlag={updateProfileFlag}
          profileSelected={profileSelected}
          updateProfileSelected={updateProfileSelected}
        />
        <HappeningFeed />
      </div>
    </>
  );
};

export default Trending;
