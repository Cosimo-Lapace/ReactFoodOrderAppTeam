import { useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  onConfirm: () => void;
  onConfirmLabel: string;
  //   onCancel: () => {};
  //   onCancelLabel : string;
}

function ModalAction({ onConfirmLabel, onConfirm }: Props) {
  const modalRef = useRef<HTMLDivElement>();
  console.log(modalRef.current?.parentNode);
  // return createPortal(
  return(
  <button onClick={onConfirm} type="button">
    {onConfirmLabel}
  </button>
    // modalRef.current!
  );
}

export default ModalAction;
