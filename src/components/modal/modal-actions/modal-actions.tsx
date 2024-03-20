import "./modal-actions.css";

interface Props {
  onCloseLabel: string | null;
  onClose: ()=>void | null;
  onConfirmLabel: string | null;
  onConfirm: ()=>void | null;
}

function ModalActions({ onClose, onCloseLabel, onConfirm, onConfirmLabel }: Props) {

  return (
    <div className="modal-actions">
      {onCloseLabel && <button onClick={onClose} type="button">{onCloseLabel}</button>}
      {onConfirmLabel && <button onClick={onConfirm} type="button">{onConfirmLabel}</button>}
    </div>
  );
}

export default ModalActions;
