import React, { forwardRef } from "react";
import classes from "./button.module.css";

interface Props extends React.PropsWithChildren{
  onClick: () => void
}
//we give the children prop to the button
const Button = forwardRef(function Button({onClick,
  children,
  ...rest
}: Props, ref) {
  return (
    <>
      {/* we give the children prop to the button */}
      <button ref={ref} {...rest} className={classes.button} onClick={onClick}>
        {children}
      </button>
    </>
  );
});
export default Button;