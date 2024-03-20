import React, { useEffect } from "react";
import { getMenu } from "../../http/https.ts";

const Menu: React.FC = ()=>{
    useEffect(() => {
        getMenu("meals");
    }, []);

    return(<div>
        <h1>Meals</h1>
    </div>);
}
export default Menu;