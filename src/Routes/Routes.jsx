import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../layouts/Root/Root";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddQueries from "../AddQueries/AddQueries";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/add_products',
            element:<PrivateRoutes>
                <AddQueries></AddQueries>
            </PrivateRoutes>
        }
      ]
    },
  ]);



  export default router;