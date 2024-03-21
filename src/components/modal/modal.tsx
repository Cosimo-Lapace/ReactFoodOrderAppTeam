import "./modal.css";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { ModalRef } from "../headers/headers";
import { useNavigate } from "react-router";


const Modal = forwardRef<ModalRef, React.PropsWithChildren>(function Modal(
  { children },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  //Modal closing
  function close() {
    dialog.current?.close();
  }

  //Modal opening
  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialog.current) {
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
