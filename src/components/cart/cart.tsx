import { createPortal } from "react-dom";
import ModalActions from "../modal/modal-actions/modal-actions";
import styles from "./cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import CartItem from "./cart item/cart-item";

function Cart() {
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <section className={styles["cart"]}>
      {/*Temporary solution for aligning the title */}
      {document.getElementById("modal-title") &&
        createPortal(
          <h2>Your Cart</h2>,
          document.getElementById("modal-title")!
        )}
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
        onConfirm={() => {}}
      />
    </section>
  );
}

export default Cart;
