// React Modules
import { createContext, useContext, useState, useRef } from "react";

// Create Context
const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const inputRef = useRef(null);
  const [searchedData, setSearchedData] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        inputRef,
        searchedData,
        setSearchedData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Custom Hook for useContext
export const useSearchContext = () => useContext(SearchContext);
