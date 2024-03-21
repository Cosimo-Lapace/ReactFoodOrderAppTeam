import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    // eventuale mappatura delle rotte a livello applicativo con /*
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
