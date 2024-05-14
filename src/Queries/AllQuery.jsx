import { Link } from "react-router-dom";


const AllQuery = ({query}) => {
    const {_id, products_name,
        products_brand,
        query_title,
        product_photo,
        alternation_reason,
        name, 
        photo,
        email,
        dateAdd,
        recommendationCount}=query;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={product_photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{products_name}</h2>
    <p>{products_brand}</p>
    <p>{query_title}</p>
    <p>{alternation_reason}</p>
    <p>{new Date(dateAdd).toLocaleDateString()}</p>
    <div className="btn">
        <img className="w-1/6 rounded-xl" src={photo} alt="" />
        </div> 
      <div className="btn-outline">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        </div>

    
    <div className="card-actions">
        <button className="btn btn-primary">RecommendationCount:{recommendationCount}</button>
        <Link to={`/detailsPages/${_id}`}>
      <button className="btn btn-primary"> Recommend</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default AllQuery;