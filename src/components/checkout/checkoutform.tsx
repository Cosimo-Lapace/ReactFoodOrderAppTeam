import React from "react";
import Input from "../../utilities/input/input";
import Button from "../../utilities/button/button";
import classes from "../../utilities/input/input.module.css";
import CheckoutValidation from "./checkout-validation/checkoutValidation";

const CheckoutForm: React.FC = ({ 
  orderData,
  errors,
  handleChange,
  handleReset,
 }) => {
  return <form className="control">
    <h2>Total: €</h2>
    <div className={classes["control"]}>
            <label htmlFor="name">Name</label>
        <Input
          name={"name"}
          type={"text"}
          placeholder={"Enter your full name"}
          value={orderData.order.customer.name}
          onChange={handleChange}
          required
        />
    </div>

    <div className={classes["control"]}>
        <label htmlFor="email">Email</label>
        <Input
          name={"email"}
          type={"email"}
          placeholder={"Enter your email"}
          value={orderData.order.customer.email}
          onChange={handleChange}
          required
        />
    </div>


      <div className={classes["control"]}>
        <label htmlFor="street">Street</label>
        <Input
          name={"street"}
          type={"text"}
          placeholder={"Enter your address"}
          value={orderData.order.customer.street}
          onChange={handleChange}
          required
        />
    </div>

    <div className={classes["control-row"]}>
        <label htmlFor="city">City</label>
        <Input
          name={"city"}
          type={"text"}
          placeholder={"Enter your city"}
          value={orderData.order.customer.city}
          onChange={handleChange}
          required
        />
   
        <label htmlFor="zip">Postal Code</label>
        <Input
          name={"postalCode"}
          type={"number"}
          placeholder={"Enter your zip code"}
          value={orderData.order.customer.postalCode}
          onChange={handleChange}
          required
        />
    </div>

    <CheckoutValidation />

    {Object.keys(errors).map((key) => (
        <p key={key} style={{ color: "red" }}>
          {errors[key]}
        </p>
      ))}

    <div className={classes["control-row"]}>
        <Button onClick={() => console.log(orderData)}>Submit Order</Button>
        <Button onClick={handleReset}>Clear form</Button>
    </div>
  
  </form>;
};
export default CheckoutForm;