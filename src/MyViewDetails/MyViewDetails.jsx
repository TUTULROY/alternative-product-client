import { useLoaderData } from "react-router-dom";



const MyViewDetails = () => {
    const views = useLoaderData();
    const {products_name,
        products_brand,
        query_title,
        product_photo,
        alternation_reason,
        name, 
        photo,
        dateAdd}=views;
        console.log(views);
    

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <img src={product_photo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default MyViewDetails;