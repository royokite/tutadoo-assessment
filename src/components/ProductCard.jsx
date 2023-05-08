import React from "react";

 const ProductCard = ({item}) => {
  return (
    <article>
      <img src={item.image} alt="product-pic" className="w-1/2 h-72"/>
      <p>{item.title}</p>
      <p className="font-semibold">${item.price}</p>
    </article>
  );
}

export default ProductCard;