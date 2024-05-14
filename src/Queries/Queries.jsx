
import AllQuery from "./AllQuery";
import { useEffect, useState } from "react";


const Queries = () => {
    // const all_queries= useLoaderData();
    const [queries, setQuery] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data =>{
            const sortedQueries = data.sort((a, b) => new Date(b.dateAdd) - new Date(a.dateAdd));
            setQuery(sortedQueries);
           
        } )
    },[])
//    console.log(queries);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           {
            queries.map(query => <AllQuery key={query._id} query={query}></AllQuery>)
           }
        </div>
    );
};

export default Queries;