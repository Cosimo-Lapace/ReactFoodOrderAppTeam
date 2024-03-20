import React from "react";

interface Props extends React.PropsWithChildren{
}
const Button: React.FC<Props> = ({children}) => {
       const handleClick = () => {
        //to implement logic later
        console.log('clicked');
    }
  return <>
    <button className="button" onClick={handleClick}> {children} </button>
  </>;
};
export default Button;