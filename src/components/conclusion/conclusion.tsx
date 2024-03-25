
import "./conclusion.css";
import Button from "../../utilities/button/button";
import { useContext } from "react";
import { ModalContext } from "../../store/modal-context";

function Conclusion() {
  const {  close, navigate } = useContext(ModalContext);
  function onclose() {
    close();
    navigate("/");
  }

  return (
    <div className="conclusion">
      <h1>Thank you for your order!</h1>
      <Button onClick={onclose}>Close</Button>
    </div>
  );
}

export default Conclusion;
