import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";
import CheckoutForm from "../checkoutform";


const CheckoutValidation: React.FC = () => {
    const { items } = useContext(CartContext);

    //State for error validation:
    const [errors, setErrors] = React.useState({});

    //Statedata to pass to backend:
    const [orderData, setOrderData] = React.useState({
    order: {
      items: [...items],
      customer: {
        name: "",
        email: "",
        street: "",
        postalCode: "",
        city: "",
      },
    },
    });

    //onChange function:
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setOrderData((prevState) => ({
      ...prevState,
      order: {
        ...prevState.order,
        customer: {
          ...prevState.order.customer,
          [name]: value,
        },
      },
    }));
  };

  //validation functions:
  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!orderData.order.customer.name.trim()) {
      formIsValid = false;
      errors["name"] = "Name is required.";
    }

    if (!orderData.order.customer.email.includes("@")) {
      formIsValid = false;
      errors["email"] = "Email is invalid. Please enter a valid email.";
    }

    if (!orderData.order.customer.street.trim()) {
      formIsValid = false;
      errors["street"] =
        "Address is required. Where are we going to deliver your food otherwise??";
    }
 
    if (!orderData.order.customer.postalCode.trim()) {
      formIsValid = false;
      errors["postalCode"] = "Zipcode is required.";
    }

    if (!orderData.order.customer.city.trim()) {
      formIsValid = false;
      errors["city"] = "City is required.";
    }

    setErrors(errors);
    return formIsValid;
  };

  //reset input function:
    const handleReset = () => {
    setOrderData({
      order: {
        items: [...items],
        customer: {
          name: "",
          email: "",
          street: "",
          postalCode: "",
          city: "",
        },
      },
    });
  };

  return <>
    <CheckoutForm
        errors={errors}
        orderData={orderData}
        handleChange={handleChange}
        handleReset={handleReset}
        validateForm={validateForm}
    />
  </>;
};
export default CheckoutValidation;