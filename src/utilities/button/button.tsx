import React from "react";
import classes from "./button.module.css";

interface Props extends React.PropsWithChildren{
  onClick: () => void
}
//we give the children prop to the button
const Button: React.FC<Props> = ({ children, onClick, ...rest }) => {
  return (
    <>
      {/* we give the children prop to the button */}
      <button {...rest} className={classes.button} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default Button;