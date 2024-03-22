import { Order } from "../model/OrderData";
import { Outcome } from "../model/Outcome";
import React from "react";

const usePost = (
  //we pass a function that returns a promise
  typeFn: (uri: string, order: Order) => Promise<[]>,
  //we pass a string
  uri: string,
  //we pass a body
  order: Order,
  //we pass a string as default error message
  errorMessage = "An error has occurred"
) => {
  //We create 3 states for data, error and loading
  const [outcome, setOutcome] = React.useState<Outcome>();
  const [loading, setLoading] = React.useState<boolean>(false);

  async function post() {
    setLoading(true);
    try {
      await typeFn(uri, order);
      setOutcome({ message: "Your order has been placed!", success: true });
      setLoading(false);
    } catch (error) {
      setOutcome({ message: errorMessage, success: false });
      setLoading(false);
    }
  }
  return {post, loading, outcome};
};

export default usePost;
