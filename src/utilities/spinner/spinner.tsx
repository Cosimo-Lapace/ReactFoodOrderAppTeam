import React from "react";
import  "./spinner.css";

//we define our spinner props
interface Props {
  typeContainer: string;
}

const Spinner: React.FC <Props> = ({typeContainer}) => {
  return <div
  //we give the className based on the typeContainer props passed
      className={
        typeContainer === "sm"
          ? "spinnerContainerSm"
          : "spinnerContainerXl"
      }>
    <span className="loader"></span>
  </div>;
};
export default Spinner;