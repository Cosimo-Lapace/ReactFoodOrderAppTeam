import ModalActions from "../modal/modal-actions/modal-actions";
import styles from "./cart.module.css";

function Cart() {
  return (
    <section className={styles["cart"]}>
      <h2>Your Cart</h2>
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
        onCloseLabel={"Close"}
        onClose={() => {}}
        onConfirmLabel={"Go To Checkout"}
        onConfirm={() => {}}
      />
    </section>
  );
}

export default Cart;
