import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/customs.css";
import Incart from "../images/incart.png";
import { useCart } from "react-use-cart";

 const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/products/${item.id}`);
  const { inCart } = useCart();

  return (
    <article onClick={handleClick} className={`p-3 ${inCart(item.id) ? "product-card" : ""}`}>
      <div className="relative">
        <img src={item.image} alt="product-pic" className="w-full h-68"/>
        { inCart(item.id) && <img src={Incart} alt="incart-icon" className="position-absolute -bottom-10 right-0 translate-middle" style={{width: '2.5rem', height: '2.5rem'}}/>}
      </div>
      <p>{item.title} {item.tag}</p>
      <p className="font-semibold">${item.price}</p>
    </article>
  );
}

export default ProductCard;