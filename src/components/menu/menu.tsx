import React, { useEffect } from "react";

import  Card from "../../components/menu/card/card.tsx";
import { Meals } from "../../model/Meals.ts";

const Menu: React.FC = ()=>{
    const [meals, setMeals] = React.useState<Meals[]>([]);

    const url = 'http://localhost:3000/';
   
    useEffect(() => {
     async function getMenu(uri: string) {
        try {
            const response = await fetch(url + uri);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setMeals(data);
            return data;
        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    }
    getMenu("meals");
    }, []);

    return(<>
        {meals.map((meal: Meals) => (
            <div key={meal.id}>
                <Card id={meal.id} image={meal.image} name={meal.name} price={meal.price} description={meal.description} />
            </div>
        ))}
    </>);
}
export default Menu;