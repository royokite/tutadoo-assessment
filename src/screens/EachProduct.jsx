import React from "react";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
import { useCart } from "react-use-cart";
import "../styles/customs.css";

const EachProduct = ({ ProductList }) => {

  const { id } = useParams();
  const product = ProductList.find(item => item.id === Number(id));
  const { addItem } = useCart();
  const handleAdd = () => addItem(product);

  return (
    <section className="flex flex-row mt-10 flex-wrap">
      <div className="flex flex-row flex-wrap">
        <article className="flex flex-column m-1">
          <img src={product.image} alt="item-one" width={60} height={60} className="mb-4"/>
          <img src={product.image} alt="item-one" width={60} height={60} className="mb-4"/>
          <img src={product.image} alt="item-one" width={60} height={60} className="mb-4"/>
        </article>
        <img src={product.image} alt="item-one" style={{width: '28rem', height: '22rem'}} className="lg:ml-8 lg:mr-20"/>
      </div>
      <aside className="w-64 flex flex-column">
        <span className="font-bold text-xl">{product.title}</span>
        <span className="text-xl">{product.tag}</span> <br />
        <div>
          <span className="font-bold text-md">SIZE:</span> <br />       
          <div role="group" className="inline-flex w-full justify-between">
            {/* <button type="button" className="px-3 py-1 ms-0 text-lg font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
              XS
            </button>
            <button type="button" className="px-3 py-1 ml-1 text-lg font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
              S
            </button>
            <button type="button" className="px-3 py-1 ml-1 text-lg font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
              M
            </button>
            <button type="button" className="px-3 py-1 ml-1 text-lg font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
              L
            </button> */}

            <div>
              <input type="radio" name="option" id="xs" className="peer hidden" />
              <label
                htmlFor="xs"
                className="block cursor-pointer select-none border-2 border-black px-4 text-xs py-2 ml-0 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
              >
                XS
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="option"
                id="s"
                className="peer hidden"
              />
              <label
                htmlFor="s"
                className="block cursor-pointer select-none border-2 border-black px-4 text-xs py-2 ml-1 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
              >
                S
              </label>
            </div>
            <div>
              <input type="radio" name="option" id="m" className="peer hidden" />
              <label
                htmlFor="m"
                className="block cursor-pointer select-none border-2 border-black px-4 text-xs py-2 ml-1 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
              >
                M
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="option"
                id="l"
                className="peer hidden"
              />
              <label
                htmlFor="l"
                className="block cursor-pointer select-none border-2 border-black px-4 text-xs py-2 ml-1 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
              >
                L
              </label>
            </div>
        </div>
        </div>
        <div className="my-2">
          <span className="font-bold text-md">COLOR:</span> <br />   
          <div className="inline-flex" role="group">
            <button type="button" className="p-3 m-1 ms-0 w-15 bg-gray-300 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
            <button type="button" className="p-3 m-1 w-15 bg-gray-800 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
            <button type="button" className="p-3 m-1 w-15 bg-green-800 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
          </div>
        </div>
        <div className="flex flex-column">
          <span className="font-bold text-md">PRICE:</span>  
          <span className="font-bold text-xl my-2">${product.price}</span>
        </div>
        <Button variant="custom" onClick={handleAdd} className="w-full mt-2">ADD TO CART</Button>
        <p className="my-4 font-semibold text-sm">Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>

      </aside>
      
    </section>
  );
}

export default EachProduct;