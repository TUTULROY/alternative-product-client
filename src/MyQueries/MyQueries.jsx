import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyQuery from "./MyQuery";
import { Link } from "react-router-dom";


const MyQueries = () => {
    const {user}=useContext(AuthContext);
    const [items, setItem] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/products?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            const sortedQueries = data.sort((a, b) => new Date(b.dateAdd) - new Date(a.dateAdd));
            setItem(sortedQueries);
           
        } )
    },[user])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.length > 0 ? (
                items.map(item=> (<MyQuery key={item._id}
                item={item}
                ></MyQuery>
                ))
            )
            :(
                <div className="text-center">
                    <h1>No queries found.</h1>
                   <Link to='/add_products'>
                   <button className="btn btn-primary">Add Query</button>
                   </Link>

                </div>
            )
            }
        </div>
    );
};

export default MyQueries;