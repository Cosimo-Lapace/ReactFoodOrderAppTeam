import React from "react";
import Input from "../../utilities/input/input";
import Button from "../../utilities/button/button";
import classes from "../../utilities/input/input.module.css";

const CheckoutForm: React.FC = () => {
  return <form className="control">
    <h2>Total: €</h2>
    <div className={classes["control-row"]}>
        <div>
            <label htmlFor="name">Name</label>
        </div>
        <Input
          name={"name"}
          type={"text"}
          placeholder={"Enter your full name"}
          value={""}
          onChange={() => {}}
          required
        />
    </div>

    <div className={classes["control-row"]}>
        <label htmlFor="email">Email</label>
        <Input
          name={"email"}
          type={"email"}
          placeholder={"Enter your email"}
          value={""}
          onChange={() => {}}
          required
        />
    </div>


      <div className={classes["control-row"]}>
        <label htmlFor="phone">Phone</label>
        <Input
          name={"phone"}
          type={"text"}
          placeholder={"Enter your phone number"}
          value={""}
          onChange={() => {}}
          required
        />
    </div>

    <div className={classes["control-row"]}>
        <label htmlFor="address">Address</label>
        <Input
          name={"address"}
          type={"text"}
          placeholder={"Enter your address"}
          value={""}
          onChange={() => {}}
          required
        />
    </div>

    <div className={classes["control-row"]}>
        <label htmlFor="city">City</label>
        <Input
          name={"city"}
          type={"text"}
          placeholder={"Enter your city"}
          value={""}
          onChange={() => {}}
          required
        />
    </div>

    <div className={classes["control-row"]}>
        <label htmlFor="zip">Zip Code</label>
        <Input
          name={"zip"}
          type={"number"}
          placeholder={"Enter your zip code"}
          value={""}
          onChange={() => {}}
          required
        />
    </div>

    <div className={classes["control-row"]}>
        <Button>Submit Order</Button>
        <Button>Clear form</Button>
    </div>
  
  </form>;
};
export default CheckoutForm;