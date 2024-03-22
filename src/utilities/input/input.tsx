import React from "react";
import "./input.css";
import { Customer } from "../../model/OrderData";

//we assign enums to our inputs in order to avoid typos (baked enums)
enum InputType {
  Text = "text",
  email = "email",
  number = "number",
}

//we define our input props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  placeholder?: string;
  setUserData: React.Dispatch<React.SetStateAction<Customer>>;
  name: keyof Customer;
  value: string;
}

//render logic based on "type" props passed
const Input: React.FC<InputProps> = ({
  value,
  setUserData,
  name,
  type,
  placeholder,
  ...rest
}) => {
  function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    const { value } = target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <>
      <input
        value={value}
        onChange={changeValue}
        className="control"
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};
export default Input;
