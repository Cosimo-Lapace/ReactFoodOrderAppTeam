import { useContext } from "react";
import Card from "../../components/menu/card/card.tsx";
import { Meals } from "../../model/Meals.ts";
import   "./menu.css";
import Spinner from "../../utilities/spinner/spinner.tsx";
import Button from "../../utilities/button/button.tsx";
import Input from "../../utilities/input/input";

import { FilterContext } from "../../store/filter-context.tsx";

const Menu: React.FC = () => {
  //we destructure the useApi hook and pass the getMeals function
  const { displayMeals, handleSearch, error, loading } = useContext(FilterContext);

  return (
    <>
      <div className="search-container">
        <Input
          name={"search"}
          type={"text"}
          placeholder={"search..."}
          onChange={handleSearch}
        />
      </div>
      {/* spinner container if the data is loading */}
      {loading ? <Spinner typeContainer="xl" /> : null}
      {/* error container if the data is not loading and there is an error with retry button */}
      {error ? (
        <div className="error-container">
          <h5>{error}</h5>
          <Button children="Retry" onClick={() => window.location.reload()} />
        </div>
      ) : null}
      {!error && !loading ? (
        <div id="meals">
          {displayMeals.map((meal: Meals) => (
            // we pass the list of the meals through a mapped array
            <div key={meal.id}>
              <Card
                id={meal.id}
                image={meal.image}
                name={meal.name}
                price={meal.price}
                description={meal.description}
              />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};
export default Menu;
