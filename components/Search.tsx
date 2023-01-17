// When the input section is not focus:
// -> #526470 : search icon and border color of the whole search section
// Now when it gets focussed:
// #1d9bf0 : color of search icon and border color of the whole search section

// Overall background color of search bar: #eef3f4
// Overall background of dark mode related part: #202329
import { CiSearch as SearchIcon } from "react-icons/ci";
import { IoCloseCircleOutline as CloseSearch } from "react-icons/io5";
import {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { UserInterface } from "../lib/types/type";
import { SearchSuggestionCard } from "./SearchSuggestionCard";
const Search = ({
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
  const [searchQuery, updateSearchQuery] = useState("");
  const [usersList, updateUsersList] = useState<UserInterface[]>([]);
  const [listView, updateListView] = useState(false);
  const inputUpdates = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = changeEvent;
    updateSearchQuery(value);
    updateListView(true);
  };
  useEffect(() => {
    fetch("http://localhost:8000/users_list")
      .then((response) => response.json())
      .then((data: UserInterface[]) => {
        updateUsersList(data);
      });
  }, []);

  return (
    <>
      <form
        className="flex w-4/5 justify-between items-center m-auto bg-[#202329] border border-transparent focus-within:border-[#1d9bf0] py-2 rounded-t-full rounded-b-full relative"
        onSubmit={(submitEvent: FormEvent) => {
          submitEvent.preventDefault();
        }}
      >
        <div className="pl-3">
          <SearchIcon className="text-[#eef3f4]" />
        </div>
        <div className="flex-1 h-full">
          <input
            value={searchQuery}
            onChange={inputUpdates}
            className="bg-[transparent] text-[#eef3f4] w-full focus:outline-none focus:slate-500 rounded-t-full rounded-b-full pl-2"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
        {searchQuery !== "" || listView ? (
          <ul className="list-none flex flex-col overflow-hidden w-full bg-[#1b6366] absolute h-max rounded-md top-11">
            {usersList.filter(
              ({ user_name, user_display_name }) =>
                user_name?.toLowerCase().includes(searchQuery) ||
                user_display_name?.toLowerCase().includes(searchQuery)
            ).length !== 0 ? (
              <>
                {usersList
                  .filter(
                    ({ user_name, user_display_name }) =>
                      user_name?.toLowerCase().includes(searchQuery) ||
                      user_display_name?.toLowerCase().includes(searchQuery)
                  )
                  .map((everySearch: UserInterface) => {
                    return (
                      <SearchSuggestionCard
                        key={everySearch.user_id}
                        {...everySearch}
                        searchResult={everySearch}
                        profileFlag={profileFlag}
                        updateProfileFlag={updateProfileFlag}
                        profileSelected={profileSelected}
                        updateProfileSelected={updateProfileSelected}
                      />
                    );
                  })}
              </>
            ) : (
              <li className="py-4 pl-2 text-[#eef3f4]">search the users</li>
            )}
          </ul>
        ) : null}
        {listView ? (
          <div
            className="pr-3 cursor-pointer"
            onClick={() => {
              updateSearchQuery("");
              updateListView(false);
            }}
          >
            <CloseSearch className="text-[#eef3f4]" />
          </div>
        ) : null}
      </form>
    </>
  );
};

export { Search };
