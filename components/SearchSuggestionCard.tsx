import { UserInterface } from "../lib/types/type";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
const SearchSuggestionCard = ({
  user_id,
  user_name,
  user_img,
  user_display_name,
  searchResult,
  profileFlag,
  updateProfileFlag,
  profileSelected,
  updateProfileSelected,
}: {
  user_id: string;
  user_name: string;
  user_img: string;
  user_display_name: string;
  searchResult: UserInterface;
  profileFlag: boolean;
  updateProfileFlag: Dispatch<SetStateAction<boolean>>;
  profileSelected: UserInterface;
  updateProfileSelected: Dispatch<SetStateAction<UserInterface>>;
}) => {
  const setProfileView = () => {
    updateProfileFlag(true);
    updateProfileSelected(searchResult);
  };
  return (
    <li
      className="flex flex-row items-center py-2 pl-2 cursor-pointer text-[#eef3f4]"
      onClick={setProfileView}
    >
      <Image
        src={`${user_img}`}
        alt={user_display_name}
        width={60}
        height={60}
        className="rounded-full"
      />

      <div className="pl-2 py-4 flex flex-col justify-between">
        <small className="text-lg">{user_display_name}</small>
        <small>{user_name}</small>
      </div>
    </li>
  );
};
export { SearchSuggestionCard };
