import React from "react";
import { Meals } from "../../../model/Meals.ts";
import { url } from "../../../http/https.ts";
import Button from "../../button/button.tsx";

const Card: React.FC<Meals> = ({ image, name, price, description }) => {
  return <div className="meal-item">
    <article>
        <img src={`${url}${image}`} alt={name}/>
        <h3>{name}</h3>
        <div className="meal-item-price">€ {price}</div>
        <p className="meal-item-description">{description}</p>
        <div>
            <Button children="Add to cart" />

            {/* fare condizionale per mostrare bottone rimozione elemento */}
            <Button children="X" />
        </div>
    </article>
  </div>;
};
export default Card;