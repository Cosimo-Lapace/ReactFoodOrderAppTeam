import { useState } from "react";
import { getMenu } from "../../http/https.ts";
import  Card from "../../components/menu/card/card.tsx";
import { Meals } from "../../model/Meals.ts";
import classes from "./menu.module.css";
import useApi from "../../hooks/useAPI.tsx";
import Spinner from "../../utilities/spinner/spinner.tsx";
import Button from "../../utilities/button/button.tsx";
import Input from "../../utilities/input/input";

const Menu: React.FC = ()=>{
    //we destructure the useApi hook and pass the getMeals function
    const {data:meals, error, loading} = useApi(getMenu, "meals", [], "An error has occurred");

    //State searchbar:
    const [searchQuery, setSearchQuery] = useState<string>("");

    //filter meals:
    const filteredMeals = meals.filter((meal: Meals) => meal.name.toLowerCase().includes(searchQuery.toLowerCase()));
   
    //handleSearch function:
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    //display meals at the occurrance of the search query:
    const displayMeals = searchQuery.trim() ? filteredMeals : meals;

    return(
    <>
    <div className={classes["search-container"]}>
        <Input name={"search"} type={"text"} placeholder={"search..."} onChange={handleSearch} />
    </div>
    {/* spinner container if the data is loading */}
    {loading ? (<Spinner typeContainer="xl" />) : null}
    {/* error container if the data is not loading and there is an error with retry button */}
    {error ? (<div className={classes["error-container"]}><h5>{error}</h5><Button children="Retry" onClick={() => window.location.reload()} /></div>) : null}
        {!error && !loading ? (<div id={classes.meals}>
            {displayMeals.map((meal: Meals) => (
                // we pass the list of the meals through a mapped array
                <div key={meal.id}>
                    <Card id={meal.id} image={meal.image} name={meal.name} price={meal.price} description={meal.description} />
                </div>
            ))}
        </div>) : null}
   </>
    );
}
export default Menu;