import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";


const UpdatePage = () => {
    const {setLoading}=useContext(AuthContext);

    const productUpdate = useLoaderData();
    const{_id,products_name, products_brand, query_title, product_photo, alternation_reason,boycotting_reason_details}= productUpdate;
    

    const handleUpdateProducts = event =>{
        event.preventDefault();
        const form = event.target;
    
        const products_name=form.products_name.value;
        const products_brand=form.products_brand.value;
        const query_title=form.query_title.value;
        const product_photo=form.product_photo.value;
        const alternation_reason=form.alternation_reason.value;
        const boycotting_reason_details=form.boycotting_reason_details.value;
        
    
        const updatedProduct = {products_name, products_brand, query_title, product_photo, alternation_reason,boycotting_reason_details}
        console.log(updatedProduct);
    
    
        fetch(`https://crud-alternative-product-server.vercel.app/products/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Update successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    setLoading(true)
    
    }
        return (
        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <h2 className="text-3xl text-center m-3">Products Add</h2>
        <form onSubmit={handleUpdateProducts} >

        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Products Name</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="products_name" defaultValue={products_name} placeholder="Products Name" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
                <span className="label-text">Products Brand </span>
            </label>
            <label className="input-group">
                
                <input type="text" name="products_brand" defaultValue={products_brand} placeholder="Products Brand" className="input input-bordered w-full" />
                
            </label>
            </div> 
            </div>


        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Query TItle</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="query_title" defaultValue={query_title} placeholder="Query TItle" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
                <span className="label-text">Boycotting Reason Details</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="boycotting_reason_details" defaultValue={boycotting_reason_details}  placeholder="Boycotting Reason Details" className="input input-bordered w-full" />
            </label>
            </div> 
            </div>


        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 mr-4">
            <label className="label">
                <span className="label-text">Alternation Reason</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="alternation_reason" defaultValue={alternation_reason} placeholder="Alternation Reason" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 mr-4">
            <label className="label">
                <span className="label-text">Product Photo</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="product_photo" defaultValue={product_photo} placeholder="Alternation Reason" className="input input-bordered w-full " />
            </label>
            </div> 
            
          
            </div>
            
            <input type="submit" value="Update Product" className="btn btn-block bg-lime-300 mb-2" />
        </form>
    </div>
    );
};

export default UpdatePage;