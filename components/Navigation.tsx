import { logo } from "../data/images";
import { tabs } from "../data/tabs";
import { navigationPropsType } from "../lib/types/type";
import Tab from "./Tab";
import Trending from "./Trending";

const Navigation = ({ currentTab, changeTab }: navigationPropsType) => {
  return (
    <>
      <div className="navigation w-1/4 flex items-center flex-col">
        {/* Image */}
        <img src={logo} width="50" className="justify-item-center m-10" />
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
        <button className="text-white text-xl font-medium bg-blue-500 px-20 py-2 rounded-full mt-8">
          Tweet
        </button>
      </div>
    </>
  );
};

export default Navigation;
