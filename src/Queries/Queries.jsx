
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
const [gridLayout, setGridLayout] = useState(3); 

const toggleGridLayout = (columns) => {
  setGridLayout(columns);
};
    
    return (
        <div>
            <div role="tablist" className="tabs tabs-boxed">
            <div role="tablist" className="tabs tabs-boxed">
                <button onClick={() => toggleGridLayout(2)} className={`tab ${gridLayout === 2 ? 'tab-active' : ''}`}>2 Columns</button>
                <button onClick={() => toggleGridLayout(3)} className={`tab ${gridLayout === 3 ? 'tab-active' : ''}`}>3 Columns</button>
               
            </div>
        </div>
        <div className={`grid grid-cols-${gridLayout} sm:grid-cols-2 md:grid-cols-3 gap-4`}>
           {
            queries.map(query => <AllQuery key={query._id} query={query}></AllQuery>)
           }
        </div>
        </div>
    );
};

export default Queries;