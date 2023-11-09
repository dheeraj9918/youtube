import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCaches = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCaches[searchQuery]) {
        setSuggestions(searchCaches[searchQuery]);
      } else {
        getSearchSuggestionsApi();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestionsApi = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleHandlerMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={toggleHandlerMenu()}
          className="h-8 mx-5 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
        />
        <img
          className="h-8 cursor-pointer"
          alt="youtube-logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
        />
      </div>
      <div className="col-span-10 ml-36">
        <div>
          <input
            className="w-1/2 border border-gray-600 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-600 border-l-transparent p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white w-[29.25rem] rounded-lg border">
            <ul>
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  className="py-2 text-lg mx-2w-[29.25rem] hover:bg-gray-100"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-10"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </div>
    </div>
  );
};

export default Head;
