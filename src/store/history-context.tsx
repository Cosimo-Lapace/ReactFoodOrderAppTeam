import { createContext } from "react";
import { Order } from "../model/OrderData";
import { useEffect, useState } from "react";
import { url } from "../http/https";

//we declare the interface with its properties
interface HistoryContextType {
  history: Order[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

//we create the context and pass the interface
export const HistoryContext = createContext<HistoryContextType>({
  history: [],
  isOpen: false,
  setIsOpen: () => {},
});

//we export the provider
export default function HistoryContextProvider({
  children,
}: React.PropsWithChildren) {
  const [history, setHistory] = useState<Order[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  //we create an effect that will get the history data and update the state when modal is open
  useEffect(() => {
    async function getHistory() {
      try {
        const response = await fetch(`${url}` + "orders");
        if (!response.ok) {
          throw new Error("Failed to get history data");
        }
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.log("Failed to get history data");
      }
    }
    getHistory();
  }, [isOpen]);

  //we return the provider that can be used in App
  return (
    <HistoryContext.Provider value={{ history, setIsOpen, isOpen }}>
      {children}
    </HistoryContext.Provider>
  );
}
