
import { SelectedMeal } from "../../model/SelectedMeal";
interface Props {
    onModal: (modal: string) => void;
    items: SelectedMeal[];
}
const Navbar: React.FC<Props> = ({ onModal, items }) => {
  return (
    <div>
      <button type="button" onClick={() => onModal("history")}>
        History
      </button>
      <button type="button" onClick={() => onModal("cart")}>
        Cart{"(" + items.length + ")"}
      </button>
    </div>
  );
};
export default Navbar;
