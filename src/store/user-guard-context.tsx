import React, { createContext } from "react";
import { Customer } from "../model/OrderData";
import { useNavigate } from "react-router";

interface UserGuardContextType {
  userData: Customer;
  setUserData: React.Dispatch<React.SetStateAction<Customer>>;
  isValid: boolean;
  handleSubmit: () => boolean;
  handleReset: () => void;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UserGuardContext = createContext<UserGuardContextType>({
  userData: {
    name: "",
    email: "",
    street: "",
    city: "",
    postalCode: "",
  },
  handleSubmit: () => {
    return false;
  },
  handleReset: () => {},
  setUserData: () => {},
  isValid: true,
  setIsValid: () => {},
});
export default function UserGuardContextProvider({
  children,
}: React.PropsWithChildren) {
  const [userData, setUserData] = React.useState<Customer>({
    name: "",
    email: "",
    street: "",
    city: "",
    postalCode: "",
  });
  const [isValid, setIsValid] = React.useState<boolean>(true);
  const navigate = useNavigate();
  function handleSubmit() {
    if (
      userData.name.length < 4 ||
      userData.street.length < 4 ||
      userData.city.length < 4 ||
      !userData.email.includes("@") ||
      !userData.postalCode.match(/.*\d+.*/)
    ) {
      setIsValid(false);
      return false;
    } else {
      setIsValid(true);
      navigate("/conclusion");
      return true;
    }
  }
  function handleReset() {
    setUserData({
      name: "",
      email: "",
      street: "",
      city: "",
      postalCode: "",
    });
  }

  return (
    <UserGuardContext.Provider
      value={{
        userData,
        setUserData,
        isValid,
        setIsValid,
        handleSubmit,
        handleReset,
      }}
    >
      {children}
    </UserGuardContext.Provider>
  );
}
