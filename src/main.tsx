import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Cart from "./components/cart/cart.tsx";
import Checkout from "./components/checkout/checkout.tsx";
import Conclusion from "./components/conclusion/conclusion.tsx";
import History from "./components/history/history.tsx";
import NotFound from "./utilities/notfound/notfound.tsx";
import CartContextProvider from "./store/cart-context.tsx";
import Detail from "./components/detail/detail.tsx";
import FilterContextProvider from "./store/filter-context.tsx";

const router = createBrowserRouter([
  {
    // eventuale mappatura delle rotte a livello applicativo con /*
    path: "/",
    element: <App />,
    children: [
      {
        path: "cart",
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
      {
        path: "history",
        element: <History />,
      }
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/details/:id",
    element: <Detail />,
    errorElement: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartContextProvider>
      <FilterContextProvider>
        <RouterProvider router={router} />
      </FilterContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
