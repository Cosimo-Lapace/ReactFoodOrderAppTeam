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
          <h2>Your Cart</h2>,
      <ul>
        {items.map((item) => (
          <CartItem meal={item} />
        ))}
      </ul>

      <div className={styles["cart-total"]}>55€</div>

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
