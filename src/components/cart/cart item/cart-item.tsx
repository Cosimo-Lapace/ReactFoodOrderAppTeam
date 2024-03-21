import { useContext } from "react";
import { SelectedMeal } from "../../../model/SelectedMeal";
import styles from "./cart-item.module.css";
import { CartContext } from "../../../store/cart-context";

interface Props {
  meal: SelectedMeal;
}

function CartItem({ meal }: Props) {
  const { updateItemQuantity } = useContext(CartContext);
  return (
    <li className={styles["cart-item"]}>
      <p>{meal.id}</p>
      <div className={styles["cart-item-actions"]}>
        <button onClick={() => updateItemQuantity(meal.id, -1)} type="button">
          -
        </button>
        {meal.quantity}
        <button onClick={() => updateItemQuantity(meal.id, 1)} type="button">
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
