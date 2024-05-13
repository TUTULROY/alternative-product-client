import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddQueries = () => {
    const {user, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();

    const from ="/add_products"

    const handleAddProducts = event =>{
        event.preventDefault();
        const form = event.target;
        const products_name = form.products_name.value;
        const products_brand = form.products_brand.value;
        const query_title = form.query_title.value;
        const boycotting_reason_details =form.boycotting_reason_details.value;
        const product_photo = form.product_photo.value;
        const alternation_reason = form.alternation_reason.value;
        const email = user?.email;
      const photo = user?.photoURL;
    const name = user?.displayName;
        

        const newProducts= {
            products_name,
            products_brand,
            query_title,
            boycotting_reason_details,
            product_photo,
            alternation_reason,
            email,
            name, 
            photo,
            recommendationCount: 0
           
        }
        fetch('http://localhost:5000/products',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newProducts)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success!',
                text: 'Products added',
                icon: 'success',
                confirmButtonText: 'Ok'
              })     
        }                             
    })
    setLoading(true)
              navigate(from)

    }

    return (
        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <h2 className="text-3xl text-center m-3">Products Add</h2>
        <form onSubmit={handleAddProducts} >

        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Products Name</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="products_name" placeholder="Products Name" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
                <span className="label-text">Products Brand </span>
            </label>
            <label className="input-group">
                
                <input type="text" name="products_brand" placeholder="Products Brand" className="input input-bordered w-full" />
                
            </label>
            </div> 
            </div>


        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Query TItle</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="query_title" placeholder="Query TItle" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
                <span className="label-text">Boycotting Reason Details</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="boycotting_reason_details" placeholder="Boycotting Reason Details" className="input input-bordered w-full" />
            </label>
            </div> 
            </div>


        <div className="md:flex mb-8">
            <div className="form-control md:w-full">
            <label className="label">
                <span className="label-text">Product Image-URL</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="product_photo" placeholder="Product Image-URL" className="input input-bordered w-full " />
            </label>
            </div> 
           
            </div>


        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 mr-4">
            <label className="label">
                <span className="label-text">Alternation Reason</span>
            </label>
            <label className="input-group">
                
                <input type="email" name="alternation_reason" placeholder="Alternation Reason" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
                
                <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full " />
            </label>
            </div> 
          
            </div>
            
            <input type="submit" value="Add Queries" className="btn btn-block bg-lime-300 mb-2" />
        </form>
    </div>
    );
};

export default AddQueries;