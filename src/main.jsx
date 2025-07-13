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
import SignUp from './pages/SignUp.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Login from './pages/Login.jsx'
import { AuthProvider } from './contexts/Auth.jsx'
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx'

const router = createBrowserRouter([
  { path: "/", Component: Navbar,
    children:[
      {
        index: true, Component: Home
      },
      {
        path: "/shop", Component: Shop
      },
      { path: "/cart", element: <PrivateRoute> <Cart/> </PrivateRoute> },
      { path: "/signup", Component: SignUp },
      { path: "/login", Component: Login },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store= {store}>
      <AuthProvider>
    <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
