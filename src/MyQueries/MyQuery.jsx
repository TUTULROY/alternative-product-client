import { Link } from "react-router-dom";


const MyQuery = ({item, handleDelete}) => {
    const {_id, products_name,
        products_brand,
        
        product_photo,
        alternation_reason,
       }=item;
    return (
       <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={product_photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{products_name}</h2>
    <p>{products_brand}</p>
    <p>{alternation_reason}</p>
    <div className="card-actions">
      <Link to={`/detailsPages/${_id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
      <button onClick={()=> handleDelete(_id)} className="btn btn-error">DELETE</button>
      <Link to={`/updates/${item._id}`}>
                            <button className="btn btn-active btn-accent">Update</button>
                            </Link>
    </div>
  </div>
</div>
    );
};

export default MyQuery;