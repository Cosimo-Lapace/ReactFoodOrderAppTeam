import "./modal.css";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props extends React.PropsWithChildren {
  open: boolean;
}

function Modal({ open, children }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open ? children : null}
      <div id="modal-actions"></div>
    </dialog>,
    document.getElementById("modal")!
  );
}

export default Modal;
