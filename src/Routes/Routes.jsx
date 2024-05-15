import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../layouts/Root/Root";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddQueries from "../AddQueries/AddQueries";
import Queries from "../Queries/Queries";
import ErrorPage from "../layouts/ErrorPage/ErrorPage";
import MyQueries from "../MyQueries/MyQueries";
import MyViewDetails from "../MyViewDetails/MyViewDetails";
import AddRecommendation from "../AddRecommendation/AddRecommendation";
import UpdatePage from "../UpdatePage/UpdatePage";
import MyRecommendation from "../MyRecommendation/MyRecommendation";
import Recommendation from "../Recommendation/Recommendation";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:5000/products')
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
        },
        {
            path:'/queries',
            element:<Queries></Queries>
            
        },
        {
            path:'/my-queries',
            element:<PrivateRoutes>
                <MyQueries></MyQueries>
            </PrivateRoutes>
        },
        {
            path:'/detailsPages/:id',
            element:<PrivateRoutes><MyViewDetails></MyViewDetails></PrivateRoutes>,
            loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            
        },
        {
            path:'/recommendations/:id',
            element:<AddRecommendation></AddRecommendation>,
            loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path:'/updates/:id',
            element:<PrivateRoutes><UpdatePage></UpdatePage></PrivateRoutes>,
            loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path:'/my-recommendations',
            element:<PrivateRoutes>
                <MyRecommendation></MyRecommendation>
            </PrivateRoutes>
        },
        {
            path:'/recommendations',
            element:<Recommendation></Recommendation>
        }
      ]
    },
  ]);



  export default router;