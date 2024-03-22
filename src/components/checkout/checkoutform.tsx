import React, { useContext } from "react";
import Input from "../../utilities/input/input";
import Button from "../../utilities/button/button";
import classes from "../../utilities/input/input.module.css";
import { UserGuardContext } from "../../store/user-guard-context";

const CheckoutForm: React.FC = () => {
  const { userData, setUserData, isValid, handleSubmit, handleReset } =
    useContext(UserGuardContext);

  function handleSubmited(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit();
  }

  function handleResetForm() {
    handleReset();
  }

  return (
    <>
      {!isValid && <p>Please fill all fields</p>}
      <form className="control" onSubmit={handleSubmited}>
        <h2>Total: €</h2>
        <div className={classes["control"]}>
          <label htmlFor="name">Name</label>
          <Input
            name="name"
            type={"text"}
            placeholder={"Enter your full name"}
            setUserData={setUserData}
            value={userData.name}
          />
        </div>

        <div className={classes["control"]}>
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            type={"email"}
            placeholder={"Enter your email"}
            setUserData={setUserData}
            value={userData.email}
          />
        </div>

        <div className={classes["control"]}>
          <label htmlFor="street">Street</label>
          <Input
            name="street"
            type={"text"}
            placeholder={"Enter your address"}
            setUserData={setUserData}
            value={userData.street}
          />
        </div>

        <div className={classes["control-row"]}>
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
