import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import RecentQueries from "../RecentQueries/RecentQueries";



const Home = () => {
    const recentQueries = useLoaderData();
    return (
        <div className="">
           
            <Banner></Banner>
            <div className="grid lg:grid-cols-3 m-4">

                {
                    recentQueries.map(recentQuery => <RecentQueries key={recentQuery._id}
                    recentQuery ={recentQuery}
                    ></RecentQueries>)
                }
            </div>
        </div>
    );
};

export default Home;