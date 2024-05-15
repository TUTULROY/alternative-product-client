import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyQuery from "./MyQuery";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const MyQueries = () => {
    const {user, setLoading}=useContext(AuthContext);
    const [items, setItem] = useState([]);

    const navigate = useNavigate();

    const from ="/my-queries"

    useEffect(()=>{
        
        fetch(`http://localhost:5000/myQueries/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            const sortedQueries = data.sort((a, b) => new Date(b.dateAdd) - new Date(a.dateAdd));
            setItem(sortedQueries);
           
        } )
    },[user])
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
            
            fetch(`http://localhost:5000/products/${id}`,{
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            { user?(
                items.map(item=> <MyQuery key={item._id}
                item={item}
                handleDelete={handleDelete}
                ></MyQuery>
                )
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