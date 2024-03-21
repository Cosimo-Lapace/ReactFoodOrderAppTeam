import { createContext, useState } from "react";
import { Meals } from "../model/Meals";
import useApi from "../hooks/useAPI";
import { getMenu } from "../http/https";

interface FilterContextType {
  displayMeals: Meals[];
  handleSearch: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  error: string;
  loading: boolean
}
export const FilterContext = createContext<FilterContextType>({
  displayMeals: [],
  handleSearch: () => {},
  error: "",
  loading: false
});
export default function FilterContextProvider({
  children,
}: React.PropsWithChildren) {
  //State searchbar:
  const [searchQuery, setSearchQuery] = useState<string>("");
    const {
      data: meals,
      error,
      loading,
    } = useApi(getMenu, "meals", [], "An error has occurred");
 
  //handleSearch function:
  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);
    //filter meals:
  
  };
  const filteredMeals = meals.filter((meal: Meals) =>
    meal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //display meals at the occurrance of the search query:
    const displayMeals = searchQuery.trim() ? filteredMeals : meals;

  return (
    <FilterContext.Provider
      value={{ displayMeals, handleSearch, error, loading }}
    >
      {children}
    </FilterContext.Provider>
  );
}
