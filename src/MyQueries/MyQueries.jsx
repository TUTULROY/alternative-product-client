import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyQuery from "./MyQuery";


const MyQueries = () => {
    const {user}=useContext(AuthContext);
    const [items, setItem] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/products/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setItem(data);
        } )
    },[user])
    return (
        <div>
            {
                items.map(item=> <MyQuery key={item._id}
                item={item}
                ></MyQuery>)
            }
        </div>
    );
};

export default MyQueries;