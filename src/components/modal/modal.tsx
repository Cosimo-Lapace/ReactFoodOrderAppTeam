import "./modal.css";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { ModalRef } from "../headers/headers";


const Modal = forwardRef<ModalRef, React.PropsWithChildren>(function Modal(
  { children },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  //Modal closing
  function close() {
    dialog.current?.close();
  }

  //Modal opening
  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));

  return createPortal(
    <dialog className="modal" ref={dialog}>
      <div className="modal-header">
        <div id="modal-title"></div>
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
