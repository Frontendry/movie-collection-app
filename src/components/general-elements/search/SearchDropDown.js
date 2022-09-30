// Context
import { useSearchContext } from "../../../context/SearchContextStore";
import SearchResults from "./SearchResults";
import NoSearchResult from "./NoSearchResult";

// Components

const SearchDropDown = () => {
  const { searchedData, currentValue } = useSearchContext();

  const hideShow = (currentValue) => {
    return currentValue === "" ? "hidden" : "";
  };

  return (
    <div
      className={`absolute left-10 right-10 top-full bg-slate-500 text-white ${hideShow(
        currentValue
      )}`}
    >
      {searchedData && searchedData.length ? (
        <SearchResults filmsData={searchedData} />
      ) : (
        <NoSearchResult />
      )}
    </div>
  );
};

export default SearchDropDown;
