import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import RecentQueries from "../RecentQueries/RecentQueries";
import HeroSection from "./HeroSection/HeroSection";



const Home = () => {
    const recentQueries = useLoaderData();
    return (
        <div className="">
           
            <Banner></Banner>
            <div className="text-center mt-3 mb-3">
                <h1 className="text-4xl font-extrabold mb-2">Recent Similar Product</h1>
                <p className="text-xl mt-1">Substitute goods are identical, similar, or comparable to another product, in the eyes of the consumer</p>
            </div>
            <div className="grid lg:grid-cols-3 mt-4 mb-4 gap-5">

                {
                    recentQueries.map(recentQuery => <RecentQueries key={recentQuery._id}
                    recentQuery ={recentQuery}
                    ></RecentQueries>)
                }
            </div>
            <div>
                <HeroSection></HeroSection>
            </div>
        </div>
    );
};

export default Home;