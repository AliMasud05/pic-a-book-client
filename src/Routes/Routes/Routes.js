import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import BookItems from "../../Pages/BookItems/BookItems";
import Categories from "../../Pages/Categories/Categories";
import AdminDashBoard from "../../Pages/Dashboard/DashboardLayout/AdminDashBoard";
import DashBoard from "../../Pages/Dashboard/DashboardLayout/DashBoard";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const router =createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
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
          path:'/addProduct',
          element:<AddProduct></AddProduct>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'/dashboard/admindashboard',
          element:<AdminDashBoard></AdminDashBoard>
        }
      ]
    }
]);
export default router;