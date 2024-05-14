import { Link, useLoaderData } from "react-router-dom";



const MyViewDetails = () => {
    const views = useLoaderData();
    const {products_name,
        products_brand,
        query_title,
        product_photo,
        alternation_reason,
        name, 
        photo,
        email,
        dateAdd,
        recommendationCount}=views;
        
    

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <img src={product_photo} className="max-w-sm rounded-lg shadow-2xl" />
    <p>{query_title}</p>
    <p>{new Date(dateAdd).toLocaleDateString()}</p>
    <div className="text-center">
      <h1 className="text-2xl font-bold">Products Name:{products_name}</h1>
      <p>Products Brand: {products_brand}</p>
      <p className="py-6">Alternation Reason: {alternation_reason}</p>
      <div className="flex text-center">
      <div className="btn">
        <img className="w-1/6 rounded-xl" src={photo} alt="" />
        </div> 
      <div className="btn-outline">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        </div>

    </div>
    <div className="gap-3">
      <button className="btn btn-primary gap-3 mr-7">Recommendation Count:{recommendationCount}</button>
     <Link to='/recommendations'>
     <button className="btn btn-primary ml-7">Add Recommendation</button>
     </Link>
      </div>
    </div>
  </div>
</div>
    );
};

export default MyViewDetails;