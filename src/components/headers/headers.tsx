import "./headers.css";
import logo from "/logo.jpg";
import Modal from "../modal/modal";
import Cart from "../cart/cart";
import { useRef } from "react";

export interface ModalRef {
  open: () => void;
}

export default function Headers() {
  const dialog = useRef<ModalRef>(null);
  function openModal() {
    dialog.current?.open();
   }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <div>
        <button type="button">Orders History</button>
        <button type="button" onClick={openModal}>
          Cart(0)
        </button>
      </div>
      <Modal ref={dialog}>
        <Cart />
      </Modal>
    </header>
  );
}
