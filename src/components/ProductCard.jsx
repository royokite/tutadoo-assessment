import React from "react";
import { useNavigate } from "react-router-dom";

 const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/products/1')  ;

  return (
    <article onClick={handleClick}>
      <img src={item.image} alt="product-pic" className="w-1/2 h-72"/>
      <p>{item.title}</p>
      <p className="font-semibold">${item.price}</p>
    </article>
  );
}

export default ProductCard;