import { createPortal } from "react-dom";
import ModalActions from "../modal/modal-actions/modal-actions";
import styles from "./cart.module.css";

function Cart() {
  return (
    <section className={styles["cart"]}>
      {/*Temporary solution for aligning the title */ }
      {document.getElementById("modal-title") &&
        createPortal(
          <h2>Your Cart</h2>,
          document.getElementById("modal-title")!
        )}
      <ul>
        <li className={styles["cart-item"]}>
          <p>Pizza</p>
          <div className={styles["cart-item-actions"]}>
            <button type="button">-</button>1<button type="button">+</button>
          </div>
        </li>
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
