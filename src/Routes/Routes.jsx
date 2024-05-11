import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../layouts/Root/Root";
import Login from "../Login/Login";
import Register from "../Register/Register";




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
        }
      ]
    },
  ]);



  export default router;