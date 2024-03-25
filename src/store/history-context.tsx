import { createContext } from "react"
import { Order } from "../model/OrderData"
import { useEffect, useState } from "react"
import { url } from "../http/https"

interface HistoryContextType {
    history: Order[],   
}

export const HistoryContext = createContext<HistoryContextType>({
    history: [],
})

export default function HistoryContextProvider({ children }: React.PropsWithChildren) {

    const [history, setHistory] = useState<Order[]>([]);

    useEffect(() => {
        async function getHistory() {
            try {
             const response = await fetch(`${url}`+'orders');
             if(!response.ok) {
                throw new Error('Failed to get history data');
             }          
             const data = await response.json();
             setHistory(data);
            } catch (error) {
                console.log('Failed to get history data');
            }
        }
        getHistory();
    }, []);


    return (
        <HistoryContext.Provider value={{ history }}>
            {children}
        </HistoryContext.Provider>
    )
}