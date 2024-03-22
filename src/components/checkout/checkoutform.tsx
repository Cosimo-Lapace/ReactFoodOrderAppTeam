import React, { useContext } from "react";
import Input from "../../utilities/input/input";
import Button from "../../utilities/button/button";
import  "../../utilities/input/input.css";
import { UserGuardContext } from "../../store/user-guard-context";
import { CartContext } from "../../store/cart-context";

const CheckoutForm: React.FC = () => {
  const { userData, setUserData, isValid, handleSubmit, handleReset } =
    useContext(UserGuardContext);
  const {placeOrder, items, emptyCart } = useContext(CartContext);

  function handleSubmited(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
   const isValid = handleSubmit();
   if(!isValid) return;
    placeOrder({id:Math.random().toString(),items:items, customer:userData});
    emptyCart();
  }

  function handleResetForm() {
    handleReset();
  }

 


  return (
    <>
      {!isValid && <p>Please fill all fields</p>}
      <form className="control" onSubmit={handleSubmited}>
        <h2>Total: €</h2>
        <div className="control">
          <label htmlFor="name">Name</label>
          <Input
            name="name"
            type={"text"}
            placeholder={"Enter your full name"}
            setUserData={setUserData}
            value={userData.name}
          />
        </div>

        <div className="control">
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            type={"email"}
            placeholder={"Enter your email"}
            setUserData={setUserData}
            value={userData.email}
          />
        </div>

        <div className="control">
          <label htmlFor="street">Street</label>
          <Input
            name="street"
            type={"text"}
            placeholder={"Enter your address"}
            setUserData={setUserData}
            value={userData.street}
          />
        </div>

        <div className="control-row">
          <label htmlFor="city">City</label>
          <Input
            name="city"
            type={"text"}
            placeholder={"Enter your city"}
            setUserData={setUserData}
            value={userData.city}
          />

          <label htmlFor="zip">Postal Code</label>
          <Input
            name="postalCode"
            type={"text"}
            placeholder={"Enter your zip code"}
            setUserData={setUserData}
            value={userData.postalCode}
          />
        </div>
        <div className="modal-actions">
          <Button type="submit">Submit Order</Button>
          <Button type="button" onClick={handleResetForm}>
            Clear form
          </Button>
        </div>
      </form>
    </>
  );
};
export default CheckoutForm;
