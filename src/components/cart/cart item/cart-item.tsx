import { useContext } from "react";
import { SelectedMeal } from "../../../model/SelectedMeal";
import  "./cart-item.css";
import { CartContext } from "../../../store/cart-context";

interface Props {
  selectedMeal: SelectedMeal;
}

function CartItem({ selectedMeal }: Props) {
  const { updateItemQuantity } = useContext(CartContext);
  return (
    <li className="cart-item">
      <p>{selectedMeal.meal.name}</p>
      <div className="cart-item-actions">
        <button
          onClick={() => updateItemQuantity(selectedMeal.meal, -1)}
          type="button"
        >
          -
        </button>
        {selectedMeal.quantity}
        <button
          onClick={() => updateItemQuantity(selectedMeal.meal, 1)}
          type="button"
        >
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
