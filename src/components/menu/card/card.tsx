import React, { useContext, useRef } from "react";
import { Meals } from "../../../model/Meals.ts";
import { url } from "../../../http/https.ts";
import Button from "../../../utilities/button/button.tsx";
import "./card.css";
import { CartContext } from "../../../store/cart-context.tsx";
import useClickAnimation from "../../../hooks/useClickAnimation.tsx";
import { useNavigate } from "react-router-dom";

//the card component will have all the meals properties
const Card: React.FC<Meals> = ({ id, image, name, price, description }) => {
  const { addItemToCart } = useContext(CartContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const triggerAnimation = useClickAnimation(buttonRef, "animatedButton");
  const navigate = useNavigate();
  return (
    <div className="meal-item">
      <div className="article">
        <img src={`${url}${image}`} alt={name} />
        <div className="detail">
          <Button
            onClick={() =>
              navigate(`/details/${id}`, {
                state: {
                  meal: { id, image, name, price, description },
                },
              })
            }
          >
            Click to look at the details
          </Button>
        </div>
        <h3>{name}</h3>
        <div>
          <p className="meal-item-price">€ {price}</p>
        </div>

        <p className="meal-item-description">{description}</p>

        <div className="meal-item-actions">
          <Button
            ref={buttonRef}
            onClick={() => {
              addItemToCart({ id, image, name, price, description });
              triggerAnimation();
            }}
            children="Add to cart"
          />

          {/* fare condizionale per mostrare bottone rimozione elemento */}
          {/* <Button children="X" /> */}
        </div>
      </div>
    </div>
  );
};
export default Card;
