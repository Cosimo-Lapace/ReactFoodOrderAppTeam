import UserGuardContextProvider from "../../store/user-guard-context";
import CheckoutForm from "./checkoutform";

function Checkout() {
    
    return (
      <div>
        <UserGuardContextProvider>
          <CheckoutForm />
        </UserGuardContextProvider>
      </div>
    );
}
 
export default Checkout;