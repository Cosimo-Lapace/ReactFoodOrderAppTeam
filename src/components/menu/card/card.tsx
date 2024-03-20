import React from "react";
import { Meals } from "../../../model/Meals.ts";
import { url } from "../../../http/https.ts";
import Button from "../../button/button.tsx";
import classes from "./card.module.css";

//the card component will have all the meals properties
const Card: React.FC<Meals> = ({ image, name, price, description }) => {
  return <div className={classes["meal-item"]}>
    <div className={classes["article"]}>
        <img src={`${url}${image}`} alt={name}/>
        <h3>{name}</h3>
            <div>
                <p className={classes["meal-item-price"]}>€ {price}</p>
            </div>
      
         <p className={classes["meal-item-description"]}>{description}</p>
     
        <div className={classes["meal-item-actions"]}>
            <Button children="Add to cart" />

            {/* fare condizionale per mostrare bottone rimozione elemento */}
            <Button children="X" />
        </div>
    </div>
  </div>;
};
export default Card;