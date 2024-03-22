import React, { forwardRef } from "react";
import classes from "./button.module.css";
import "./button.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ onClick, children, ...rest }, ref: React.Ref<HTMLButtonElement>) => {
    return (
      <button {...rest} className={classes.button} onClick={onClick} ref={ref}>
        {children}
      </button>
    );
  }
);

export default Button;
