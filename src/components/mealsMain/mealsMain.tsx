import FilterContextProvider from "../../store/filter-context";
import Meals from "../menu/menu";

export default function MealsMain() {
    return (
        <FilterContextProvider>
        <main>
            <Meals />
        </main>
        </FilterContextProvider>
    );
}