import { useContext } from "react";
import { FilterContext } from "../../store/filter-context";
import { useParams } from "react-router-dom";

function Detail() {
  const { displayMeals } = useContext(FilterContext);
  const { id } = useParams();
  const meal = displayMeals.find((meal) => meal.id === id);
  return (
    <>
      <h1>{meal?.name}</h1>
      <img src={"http://localhost:3000/" +meal?.image} alt={"Mhanz"}></img>
      <p>{meal?.description}</p>
      <p>{meal?.price}</p>
    </>
  );
}

export default Detail;
