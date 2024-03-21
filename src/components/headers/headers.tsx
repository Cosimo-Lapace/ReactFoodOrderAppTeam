import "./headers.css";
import logo from "/logo.jpg";
import Modal from "../modal/modal";
import { useRef } from "react";
import ModalSection from "../modalSection/modal-section";
import Cart from "../cart/cart";

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
