import "./modal.css";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { ModalRef } from "../headers/headers";



const Modal = forwardRef<ModalRef, React.PropsWithChildren>(function Modal(
  { children },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  function close() {
    dialog.current?.close();
   }

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialog.current) {
        dialog.current.showModal();
      }
    }
  }));

  return createPortal(
    <dialog className="modal" ref={dialog}>
      <button className="modal-close" type="button" onClick={close}>X</button>
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
});

export default Modal;
