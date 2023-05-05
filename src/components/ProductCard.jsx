import React from "react";

 const ProductCard = ({item}) => {
    return (
        <article>
            <img src={item.image} alt="product-pic"/>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
        </article>
    );
}

export default ProductCard;