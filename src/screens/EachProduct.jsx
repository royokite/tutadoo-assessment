import React from "react";
import item1 from "../images/product-pic1.png";
import Button from "react-bootstrap/Button";
import "../styles/button.css" 

const EachProduct = () => {
  return (
    <section className="flex">
      <article>
        <img src={item1} alt="item-one" width={100} height={100}/>
        <img src={item1} alt="item-one" width={100} height={100}/>
        <img src={item1} alt="item-one" width={100} height={100}/>
      </article>
      <img src={item1} alt="item-one"/>
      <aside>
        <span className="font-bold text-3xl">Apollo</span> <br />
        <span className="text-3xl">Running Short</span> <br />
        <div>
          <span className="font-bold text-xl">SIZE:</span> <br />       
          <div class="inline-flex" role="group">
            <button type="button" className="px-4 py-3 m-2 w-15 text-lg font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
              XS
            </button>
            <button type="button" className="px-4 py-3 m-2 w-15 text-lg font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
              S
            </button>
            <button type="button" className="px-4 py-3 m-2 w-15 text-lg font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
              M
            </button>
            <button type="button" className="px-4 py-3 m-2 w-15 text-lg font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
              L
            </button>
          </div>
        </div>
        <div>
          <span className="font-bold text-xl">COLOR:</span> <br />   
          <div class="inline-flex" role="group">
            <button type="button" className="px-4 py-4 m-2 w-15 bg-gray-300 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
            <button type="button" className="px-4 py-4 m-2 w-15 bg-gray-800 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
            <button type="button" className="px-4 py-4 m-2 w-15 bg-green-800 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
          </div>
        </div>
        <div className="flex flex-column">
          <span className="font-bold text-xl">PRICE:</span>  
          <span className="font-bold text-xl my-4">$50.00</span>
        </div>
        <Button variant="custom">ADD TO CART</Button>
        <p className="my-4">Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>

      </aside>
    </section>
  );
}

export default EachProduct;