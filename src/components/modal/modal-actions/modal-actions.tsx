import Button from "../../../utilities/button/button";
import "./modal-actions.css";

interface Props {
  onCloseLabel: string | null;
  onClose: () => void | null;
  onConfirmLabel: string | null;
  onConfirm: () => void | null;
}

function ModalActions({
  onClose,
  onCloseLabel,
  onConfirm,
  onConfirmLabel,
}: Props) {
  return (
    <div className="modal-actions">
      {/*Two aligned buttons for the modal, will be displayed only if their related props exist*/}
      {onCloseLabel && (
        <Button onClick={onClose} type="button">
          {onCloseLabel}
        </Button>
      )}
      {onConfirmLabel && (
        <Button onClick={onConfirm} type="button">
          {onConfirmLabel}
        </Button>
      )}
    </div>
  );
}

export default ModalActions;
