

const AddQueries = () => {
    return (
        <div>
        <form >

        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Products Name</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="products_name" placeholder="Products Name" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 ml-4">
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
            <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Boycotting Reason Details</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="boycotting_reason_details" placeholder="Boycotting Reason Details" className="input input-bordered w-full" />
            </label>
            </div> 
            </div>


        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Product Image-URL</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="product_image_URL" placeholder="Product Image-URL" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Current Date and Time</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="current_date_and_time" placeholder="Current Date and Time" className="input input-bordered w-full" />
            </label>
            </div> 
            </div>


        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
                
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Your Name </span>
            </label>
            <label className="input-group">
                
                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered w-full" />
            </label>
            </div> 
            </div>
            <div>
            <div className="form-control mb-8">
            <label className="label">
                <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full " />
            </label>
            </div> 
            
            </div>
            <input type="submit" value="Add Tourists Spot" className="btn btn-block bg-lime-300 mb-2" />
        </form>
    </div>
    );
};

export default AddQueries;