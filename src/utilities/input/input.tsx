import React from "react";
import classes from "./input.module.css";

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
}

//render logic based on "type" props passed
const Input: React.FC<InputProps> = ({type, placeholder, ...rest}) => {
  return <>
    <input className={classes.control} type={type} placeholder={placeholder} {...rest}/>
  </>;
};
export default Input;