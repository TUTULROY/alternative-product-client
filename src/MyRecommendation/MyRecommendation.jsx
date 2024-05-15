import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyRecommon from "./MyRecommon";


const MyRecommendation = () => {
    const {user}=useContext(AuthContext);
    const [reco, setR] = useState([]);

    useEffect(()=>{
        
        fetch(`http://localhost:5000/myRecommendation/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            const sortedQueries = data.sort((a, b) => new Date(b.dateAdd) - new Date(a.dateAdd));
            setR(sortedQueries);
           
        } )
    },[user])
    return (
        <div>
            {
                reco.map(r=><MyRecommon key={r._id} r={r}></MyRecommon>)
            }

        </div>
    );
};

export default MyRecommendation;