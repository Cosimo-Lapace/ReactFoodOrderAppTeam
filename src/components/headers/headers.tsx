import "./headers.css";
import logo from "/logo.jpg";
import Modal from "../modal/modal";
import { useState } from "react";
import Cart from "../cart/cart";

export default function Headers() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <div>
        <button type="button">Orders History</button>
        <button type="button" onClick={() => setOpenModal(true)}>
          Cart(0)
        </button>
      </div>
      <Modal open={openModal}>
        <Cart />
      </Modal>
    </header>
  );
}
