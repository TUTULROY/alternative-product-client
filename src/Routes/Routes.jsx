import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../layouts/Root/Root";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);



  export default router;