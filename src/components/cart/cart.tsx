import ModalActions from "../modal/modal-actions/modal-actions";
import styles from "./cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import CartItem from "./cart item/cart-item";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { items } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <section className={styles["cart"]}>
      <h2>Your Cart</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <CartItem selectedMeal={item} key={item.meal.id} />
          ))}
        </ul>
      ) : (
        <p>Your cart is still empty :(</p>
      )}

      <div className={styles["cart-total"]}>
        {/*Total price calculation */ }
        {items
          .reduce(
            (accumulator, currentItem) => accumulator + +currentItem.meal.price*currentItem.quantity,
            0
          )
          .toFixed(2)}
        €
      </div>

      <ModalActions
        onCloseLabel={null}
        onClose={() => {}}
        onConfirmLabel={"Go To Checkout"}
        onConfirm={() => navigate("/checkout")}
      />
    </section>
  );
}

export default Cart;
