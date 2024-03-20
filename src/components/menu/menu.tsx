import React, { useEffect } from "react";
import { getMenu } from "../../http/https.ts";
import  Card from "../../components/menu/card/card.tsx";
import { Meals } from "../../model/Meals.ts";
import classes from "./menu.module.css";

const Menu: React.FC = ()=>{
    const [meals, setMeals] = React.useState<Meals[]>([]);

    
   
    useEffect(() => {
     async function getMeals(uri: string) {
        const response = await getMenu(uri);
        setMeals(response);
    }
    getMeals("meals");
    }, []);

    return(<div id={classes.meals}>
        {meals.map((meal: Meals) => (
            <div key={meal.id}>
                <Card id={meal.id} image={meal.image} name={meal.name} price={meal.price} description={meal.description} />
            </div>
        ))}
    </div>);
}
export default Menu;