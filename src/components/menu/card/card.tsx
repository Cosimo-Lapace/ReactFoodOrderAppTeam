import React, { useContext, useRef } from "react";
import { Meals } from "../../../model/Meals.ts";
import { url } from "../../../http/https.ts";
import Button from "../../../utilities/button/button.tsx";
import classes from "./card.module.css";
import { CartContext } from "../../../store/cart-context.tsx";
import useClickAnimation from "../../../hooks/useClickAnimation.tsx";

//the card component will have all the meals properties
const Card: React.FC<Meals> = ({ id, image, name, price, description }) => {
  const { addItemToCart } = useContext(CartContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const  triggerAnimation  = useClickAnimation(buttonRef, "animatedButton")
  return <div className={classes["meal-item"]}>
    <div className={classes["article"]}>
        <img src={`${url}${image}`} alt={name}/>
        <h3>{name}</h3>
            <div>
                <p className={classes["meal-item-price"]}>€ {price}</p>
            </div>
      
         <p className={classes["meal-item-description"]}>{description}</p>
     
      <div className={classes["meal-item-actions"]}>
        <Button ref={buttonRef} onClick={() => {addItemToCart({ id, image, name, price, description })}} children="Add to cart" />

            {/* fare condizionale per mostrare bottone rimozione elemento */}
            {/* <Button children="X" /> */}
        </div>
    </div>
  </div>;
};
export default Card;