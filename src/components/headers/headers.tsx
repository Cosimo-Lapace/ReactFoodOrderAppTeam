import "./headers.css";
import logo from "/logo.jpg";
import Modal from "../modal/modal";
import { useContext, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../store/cart-context";
import { HistoryContext } from "../../store/history-context";
import ModalContextProvider from "../../store/modal-context";
import Navbar from "../navbar/navbar";
export interface ModalRef {
  open: () => void;
}

export default function Headers() {
  const dialog = useRef<ModalRef>(null);
  const { items } = useContext(CartContext);
  const { setIsOpen } = useContext(HistoryContext);
  const navigate = useNavigate();
  function openModal() {
    dialog.current?.open();
  }
  function onModal(path: string) {
    openModal();
    if (path === "history") {
      setIsOpen(true);
    }else if(path === "cart"){
      setIsOpen(false);
    }
    navigate(path);
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <Navbar onModal={onModal} items={items} />
      <ModalContextProvider>
        <Modal ref={dialog}>
          <Outlet />
        </Modal>
      </ModalContextProvider>
    </header>
  );
}
