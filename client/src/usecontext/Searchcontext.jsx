

import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searchedProducts, setSearchedProducts] = useState(null);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        searchedProducts,
        setSearchedProducts
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
