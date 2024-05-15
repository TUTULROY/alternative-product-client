import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AddRecommendation = () => {
    const {user} = useContext(AuthContext);
    
    const queries = useLoaderData();
    // const { query_title, products_name, name, photo, email}=queries;
    
    console.log(queries);
    const [recommendationCount, setRecommendationCount] = useState(queries.recommendationCount);
    console.log(recommendationCount);
    const handleAddRecommendations = event =>{
        event.preventDefault();
        
        const form = event.target;
        
        const recommendation_title = form.recommendation_title.value;
        const recommended_product_name = form.recommended_product_name.value;
        const query_title = queries.query_title;
        const recommendationCount= queries.recommendationCount;
        const products_name = queries.products_name;
        const queryId = queries._id;
        const image = form.image.value;
        const recommendation_reason = form.recommendation_reason.value;
        const User_email = queries.email;
        const User_photo = queries.photo;
        const User_name = queries.name;
        const email = user?.email;
        const photo = user?.photoURL;
        const name = user?.displayName;

        const newRecommendations= {

                    queryId,
                    products_name,
                    query_title,
                    image,
                    recommendation_title,
                    recommendation_reason,
                    recommended_product_name,
                    User_email,
                    User_name, 
                    User_photo,
                    email,
                    photo,
                    name ,
                    recommendationCount
        }
        fetch('https://crud-alternative-product-server.vercel.app/recommendation',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newRecommendations)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                setRecommendationCount(recommendationCount + 1);
                Swal.fire({
                    title: 'success!',
                    text: 'Products added',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })     
            }                             
        })
        
    }
    return (
        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
        <h2 className="text-3xl text-center m-3">Recommendation Add</h2>
    <form onSubmit={handleAddRecommendations} >

    <div className="md:flex mb-8">
        <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Recommendation Title</span>
        </label>
        <label className="input-group">
            
            <input type="text" name="recommendation_title" placeholder="Recommendation Title" className="input input-bordered w-full " />
        </label>
        </div> 
        <div className="form-control md:w-1/2 md:ml-4">
        <label className="label">
            <span className="label-text">Recommended Product Name </span>
        </label>
        <label className="input-group">
            
            <input type="text" name="recommended_product_name" placeholder="Recommended Product Name" className="input input-bordered w-full" />
            
        </label>
        </div> 
        </div>


    <div className="md:flex mb-8">
        <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text"> Recommendation Reason</span>
        </label>
        <label className="input-group">
            
            <input type="text" name="recommendation_reason" placeholder=" Recommendation Reason" className="input input-bordered w-full " />
        </label>
        </div> 
        <div className="form-control md:w-1/2 md:ml-4">
        <label className="label">
            <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
            
            <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full " />
        </label>
        </div> 
        </div>

    <div className="md:flex mb-8">
        <div className="form-control md:w-full">
        <label className="label">
            <span className="label-text">Recommended Product Image</span>
        </label>
        <label className="input-group">
            
            <input type="text" name="image" placeholder="Recommended Product Image" className="input input-bordered w-full " />
        </label>
        </div> 
       
        </div>
       
        <input type="submit" value="Add Recommendation" className="btn btn-block bg-green-400 mb-2" />
    </form>
</div>
    );
};

export default AddRecommendation;