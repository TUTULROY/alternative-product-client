import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const MyRecommendation = () => {
    const {user, setLoading}=useContext(AuthContext);
    const [reco, setR] = useState([]);
    const navigate = useNavigate();

    const from ="/my-recommendations"
    useEffect(()=>{
        
        fetch(`https://crud-alternative-product-server.vercel.app/myRecommendation/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            
            setR(data);
           
        } )
    },[user])
    console.log(reco);

    const handleDelete = (id )=>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`https://crud-alternative-product-server.vercel.app/recommendation/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                      Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }
            })
            }
            setLoading(true)
            navigate(from)
          });
    }
    
    return (
        <div>
            
            {
               
                reco?.map(i =>(
                    <div key={i._id} className="overflow-x-auto mt-8 mb-5">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>Products Name</th>
                          <th> Query Title</th>
                          <th>Recommendation Title</th>
                          <th>Recommendation Reason</th>
                          <th>Recommended Product Name</th>
                          
                          <th>Delete Button</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                        <tr>
                          <th>{i.products_name}</th>
                          <td>{i.query_title}</td>
                          <td>{i.recommendation_title}</td>
                          <td>{i.recommendation_reason}</td>
                          <td>{i.recommended_product_name}</td>
                          
                          <td><button 
      onClick={() => handleDelete(i._id)}
      className="btn btn-primary">Delete</button></td>
                        </tr>
                       
                      
                      </tbody>
                    </table>
                  </div>

                ))    
            }
        </div>
    );
};

export default MyRecommendation;