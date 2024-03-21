import React from "react";
import classes from "./spinner.module.css";

//we define our spinner props
interface Props {
  typeContainer: string;
}

const Spinner: React.FC <Props> = ({typeContainer}) => {
  return <div
  //we give the className based on the typeContainer props passed
      className={
        typeContainer === "sm"
          ? classes.spinnerContainerSm
          : classes.spinnerContainerXl
      }>
    <span className={classes.loader}></span>
  </div>;
};
export default Spinner;