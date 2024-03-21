import React, { useEffect } from "react";
import { Meals } from "../model/Meals";

const useApi = ( 
    //we pass a function that returns a promise
    typeFn: (uri: string) => Promise<[]>,
    //we pass a string
    uri: string, 
    //we pass an array as initialValue
    initialValue = [],
    //we pass a string as default error message
    errorMessage = "An error has occurred"
    ) => {
    
    //We create 3 states for data, error and loading
    const [data, setData] = React.useState<Meals[]>(initialValue);
    const [error, setError] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);

    //we create a useEffect that will get the data, through the function getMeals
    useEffect(() => {
     async function getMeals() {
        setLoading(true);
        try {
            const response = await typeFn(uri);
            setData(response);
            setLoading(false);
        } catch (error) {
            setError(errorMessage);
            setLoading(false);
        }
    }
    getMeals();
    }, [typeFn, uri, errorMessage]);
    return { data, error, loading };
}

export default useApi;