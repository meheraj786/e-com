import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'

const router = createBrowserRouter([
  { path: "/", Component: Home,
    children:[
      {
        index: true, Component: Shop
      },
      { path: "/cart", Component: Cart },
    ]
   },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store= {store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
