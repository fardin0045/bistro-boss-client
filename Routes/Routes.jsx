import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../src/Layout/Main";
import Home from "../src/pages/Home/Home";
import Menu from "../src/pages/Menu/Menu/Menu";
import Order from "../src/pages/Order/Order/Order";
import Login from "../src/pages/Login/Login";
import SignUp from "../src/pages/SignUp/SignUp";
import Secret from "../src/pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../src/Layout/Dashboard";
import Cart from "../src/pages/Dashboard/Cart/Cart";
import AllUser from "../src/pages/Dashboard/AllUsers/AllUser";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoutes>
            <Secret></Secret>
            </PrivateRoutes>
        }
        
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        // admin router
        {
          path:'users',
          element:<AllUser></AllUser>
        }
      ]
    }
  ]);
  