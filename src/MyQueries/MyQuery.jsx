

const MyQuery = ({item}) => {
    const {products_name,
        products_brand,
        query_title,
        product_photo,
        alternation_reason,
        name, 
        photo,
        dateAdd}=item;
    return (
        <div>
            <h2>{products_name}</h2>
        </div>
    );
};

export default MyQuery;