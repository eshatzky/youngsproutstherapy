import { createContext, useContext } from "react";

type SearchTermContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export const SearchTermContext = createContext<
  SearchTermContextType | undefined
>(undefined);

export const useSearchTerm = () => {
  const context = useContext(SearchTermContext);
  if (context === undefined) {
    throw new Error("useSearchTerm must be used within a SearchTermProvider");
  }
  return context;
};
