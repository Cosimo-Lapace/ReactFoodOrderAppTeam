import "./modal.css";
import {  forwardRef, useImperativeHandle, useContext } from "react";
import { createPortal } from "react-dom";
import { ModalRef } from "../headers/headers";
import{ ModalContext } from "../../store/modal-context";

const Modal = forwardRef<ModalRef, React.PropsWithChildren>(function Modal(
  { children },
  ref
) {
  const {dialog,close,navigate} = useContext(ModalContext);
  //Modal opening
  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialog?.current) {
        navigate("/");
        dialog.current.showModal();
      }
    },
  }));

  return createPortal(
    <dialog className="modal" ref={dialog}>
      <div className="modal-header">
        <button type="button" onClick={close}>
          X
        </button>
      </div>
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
});

export default Modal;
