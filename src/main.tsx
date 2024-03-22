import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Cart from "./components/cart/cart.tsx";
import Checkout from "./components/checkout/checkout.tsx";
import Conclusion from "./components/conclusion/conclusion.tsx";

const router = createBrowserRouter([
  {
    // eventuale mappatura delle rotte a livello applicativo con /*
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "conclusion",
        element: <Conclusion />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
