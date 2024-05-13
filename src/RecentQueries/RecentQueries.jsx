

const RecentQueries = ({recentQuery}) => {
    const {products_name,
        products_brand,
        query_title,
        product_photo,
        alternation_reason,
        name, 
        photo,
        dateAdd}=recentQuery;
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
    <p>{dateAdd}</p>

    <div className="card-actions">
   <div className="flex ">
    <img className="w-1/12 rounded-full" src={photo} alt="" />
    
    <p>
        {name}
    </p>
    </div>
    </div>
  </div>
</div>
    );
};

export default RecentQueries;