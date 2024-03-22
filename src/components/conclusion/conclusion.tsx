import { useNavigate } from "react-router";
import style from "./conclusion.module.css";
import Button from "../../utilities/button/button";

function Conclusion() {
  const navigate = useNavigate();
  return (
    <div className={style.conclusion}>
      <h1>Thank you for your order!</h1>
      <Button onClick={() => navigate("/")}>Close</Button>
    </div>
  );
}

export default Conclusion;