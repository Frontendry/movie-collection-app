// Context
import { SearchContextProvider } from "../../../context/SearchContextStore";

// Components
import SearchForm from "./SearchForm";
import SearchDropDown from "./SearchDropDown";

const SearchWrapper = () => {
  return (
    <>
      <section className="mt-10 mb-24">
        <div className="container mx-auto px-7">
          <div className="relative w-1/2 mx-auto">
            <SearchContextProvider>
              <SearchForm />
              <SearchDropDown />
            </SearchContextProvider>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchWrapper;
