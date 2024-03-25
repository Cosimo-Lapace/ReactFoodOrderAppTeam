import { createContext } from "react";
import { Order } from "../model/OrderData";
import { useEffect, useState } from "react";
import { url } from "../http/https";

interface HistoryContextType {
  history: Order[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const HistoryContext = createContext<HistoryContextType>({
  history: [],
  isOpen: false,
  setIsOpen: () => {},
});

export default function HistoryContextProvider({
  children,
}: React.PropsWithChildren) {
  const [history, setHistory] = useState<Order[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  console.log(isOpen);
  return (
    <HistoryContext.Provider value={{ history, setIsOpen, isOpen }}>
      {children}
    </HistoryContext.Provider>
  );
}
