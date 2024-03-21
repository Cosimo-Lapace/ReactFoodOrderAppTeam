import "./headers.css";
import logo from "/logo.jpg";
import Modal from "../modal/modal";
import { useContext, useRef } from "react";
import { Outlet } from "react-router-dom";
import { CartContext } from "../../store/cart-context";
export interface ModalRef {
  open: () => void;
}

export default function Headers() {
  const dialog = useRef<ModalRef>(null);
  const { items } = useContext(CartContext);
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
          Cart{"(" + items.length + ")"}
        </button>
      </div>
      <Modal ref={dialog}>
        <Outlet />
      </Modal>
    </header>
  );
}
