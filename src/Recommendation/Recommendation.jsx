import { useEffect, useState } from "react";


const Recommendation = () => {
    const [table, setTable] = useState([]);
    useEffect(()=>{
        
        fetch('http://localhost:5000/recommendation')
        .then(res => res.json())
        .then(data =>{
            
            setTable(data)
           
        } )
    },[])
    console.log(table)
    return (
        <div>
            
            {
               
                table?.map(t =>(
                    <div key={t._id} className="overflow-x-auto mt-8 mb-5">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>Products Name</th>
                          <th> Query Title</th>
                          <th>Recommendation Title</th>
                          <th>Recommendation Reason</th>
                          <th>Recommended Product Name</th>
                          
                          
                        </tr>
                      </thead>
                      <tbody>
                       
                        <tr>
                          <th>{t.products_name}</th>
                          <td>{t.query_title}</td>
                          <td>{t.recommendation_title}</td>
                          <td>{t.recommendation_reason}</td>
                          <td>{t.recommended_product_name}</td>
                          
                        
                        </tr>
                       
                      
                      </tbody>
                    </table>
                  </div>

                ))    
            }
        </div>
    );
};

export default Recommendation;