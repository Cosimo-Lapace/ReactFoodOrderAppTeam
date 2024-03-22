import UserGuardContextProvider from "../../store/user-guard-context";
import CheckoutForm from "./checkoutform";

function Checkout() {
    
    return (
      <div>
        Questo è il checkout :D
        <UserGuardContextProvider>
          <CheckoutForm />
        </UserGuardContextProvider>
      </div>
    );
}
 
export default Checkout;