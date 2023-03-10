import Image from "next/image";
import { logo } from "../data/images";
import { tabs } from "../data/tabs";
import { navigationPropsType } from "../lib/types/type";
import Tab from "./Tab";
import Trending from "./Trending";

const Navigation = ({ currentTab, changeTab }: navigationPropsType) => {
  return (
    <>
      <div className="navigation w-1/4 border-r`-2 border-gray-400 flex items-center flex-col">
        {/* Image */}
        <Image
          src={logo}
          width={50}
          height={50}
          alt="twitter_logo"
          className=" m-10"
        />
        {/* Tabs */}
        <div className="flex flex-col">
          {tabs.map(({ id, tabName, solid, outline }) => {
            return (
              <Tab
                key={id}
                name={tabName}
                currentTab={currentTab == tabName ? true : false}
                changeTab={changeTab}
                outline={outline}
                solid={solid}
              />
            );
          })}
        </div>
        {/* Tweet Button */}
        <button
          className="text-white text-xl font-medium bg-blue-500 py-2 rounded-full mt-8"
          style={{ minWidth: "200px", width: "80%" }}
        >
          Tweet
        </button>
      </div>
    </>
  );
};

export default Navigation;
