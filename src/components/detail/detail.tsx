import { useContext, useRef } from "react";
import { FilterContext } from "../../store/filter-context";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./detail.module.css";
import Button from "../../utilities/button/button";
import { CartContext } from "../../store/cart-context";
import useClickAnimation from "../../hooks/useClickAnimation";

function Detail() {
  const { displayMeals } = useContext(FilterContext);
  const { addItemToCart } = useContext(CartContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const triggerAnimation = useClickAnimation(buttonRef, "animatedButton");
  const { id } = useParams();
  const meal = displayMeals.find((meal) => meal.id === id);
  const navigate = useNavigate();
  return (
    <>
      <h1 className={classes.h1}>{meal?.name}</h1>
      <img
        className={classes.img}
        src={"http://localhost:3000/" + meal?.image}
        alt={"Mhanz"}
      ></img>
      <p>{meal?.description}</p>
      <p className={classes.price}>${meal?.price}</p>
      <div className={classes.btn}>
        <Button type="button" onClick={() => navigate("/")}>
          Back
        </Button>
        <Button
          ref={buttonRef}
          type="button"
          onClick={() => {
            addItemToCart(meal!);
            triggerAnimation();
          }}
        >
          Add to cart
        </Button>
      </div>
    </>
  );
}

export default Detail;
