import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AdvProduct from "../../Pages/AdvProduct.js/AddProduct";

import BookItems from "../../Pages/BookItems/BookItems";
import Categories from "../../Pages/Categories/Categories";
import AllBuyers from "../../Pages/Dashboard/Admindata/AllBuyers";

import AllSellers from "../../Pages/Dashboard/Admindata/AllSellers";
import AdminDashBoard from "../../Pages/Dashboard/DashboardLayout/AdminDashBoard";
import DashBoard from "../../Pages/Dashboard/DashboardLayout/DashBoard";
import AddProduct from "../../Pages/Dashboard/SellerData/AddProduct";
import MyProduct from "../../Pages/Dashboard/SellerData/MyProduct";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoute  from "../../Pages/PrivetRoute/PrivetRoute";
import  ErrorPage  from "../../ErrorPage/ErrorPage";


const router =createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/categories',
          element:<Categories></Categories>
        },
        {
          path: '/category/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
          element:<BookItems></BookItems>
        },
        {
          path:'/addproducts',
          element:<AdvProduct></AdvProduct>
        }
       
        
        
      ]
    },
    {
      path:'/dashboard',
      element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
      children:[
        {
          path:'/dashboard/admindashboard',
          element:<AdminDashBoard></AdminDashBoard>
        },
        {
          path:'/dashboard/myproduct',
          element:<MyProduct></MyProduct>
        },
        {
          path: 'dashboard/addProduct',
          element: <AddProduct></AddProduct>
        },
        {
          path: '/dashboard/seller',
           element:<AllSellers></AllSellers>
        },
        {
          path: '/dashboard/buyer',
           element:<AllBuyers></AllBuyers>
        }

      ]
    }
]);
export default router;