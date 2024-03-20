import React from "react";
import classes from "./button.module.css";

interface Props extends React.PropsWithChildren{
}
//we give the children prop to the button
const Button: React.FC<Props> = ({children}) => {
       const handleClick = () => {
        //to implement logic later
        console.log('clicked');
    }
  return <>
  {/* we give the children prop to the button */}
    <button className={classes.button} onClick={handleClick}> {children} </button>
  </>;
};
export default Button;