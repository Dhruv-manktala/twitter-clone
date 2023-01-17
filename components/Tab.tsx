import { tabPropType } from "../lib/types/type";
const parser = require("html-react-parser");
import { RxAvatar } from "react-icons/Rx";
const Tab = ({ name, currentTab, changeTab, outline, solid }: tabPropType) => {
  return (
    <>
      <div
        className={`text-2xl font-semibold m-2 flex gap-2 item-center cursor-pointer hover:text-blue-500 ${
          currentTab ? "text-blue-500" : ""
        }`}
        onClick={() => {
          changeTab(name);
        }}
      >
        {currentTab && name != "Profile" ? parser(solid) : parser(outline)}

        {name == "Profile" ? <RxAvatar size={25} /> : ""}
        <div>{name}</div>
      </div>
    </>
  );
};

export default Tab;
