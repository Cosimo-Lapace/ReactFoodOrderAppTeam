import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "../cart/cart";
import Checkout from "../checkout/checkout";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Cart />,
    },
    {
        path: "/checkout",
        element:<Checkout />
    }
    ]);

function ModalSection() {
    
    {/*Modal Router */}
    return <RouterProvider router={router} />;
    
}
 
export default ModalSection;