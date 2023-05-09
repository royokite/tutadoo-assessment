import React from 'react';
import { useCart } from "react-use-cart";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/customs.css";

const CartOverlay = ({ show, handleClose }) => {

  const {
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
  } = useCart();

  return (  
    <>    
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        <section className="py-3">
          <h4>My Bag, <span className='font-normal'>{totalItems} items</span></h4>
          <div>
            <article>
              {items.map((item, index) => {
                return (
                  <article key={index} className="flex flex-row justify-between py-4">
                    <div className="flex flex-column w-1/2">
                      <span className="text-md">{item.title}</span>
                      <span className="text-md">{item.tag}</span>
                      <span className="font-bold text-md">${item.price}</span>
                      <div className="mt-2">
                        <span className="text-sm">Size:</span> <br />       
                        <div role="group" className="inline-flex justify-between mb-2">
                          <button type="button" className="px-1 py-1 ms-0 text-md font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                            XS
                          </button>
                          <button type="button" className="px-2 py-1 ml-0.5 text-md font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                            S
                          </button>
                          <button type="button" className="px-2 py-1 ml-0.5 text-md font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                            M
                          </button>
                          <button type="button" className="px-2 py-1 ml-0.5 text-md font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                            L
                          </button>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm">Color:</span> <br />   
                        <div className="inline-flex" role="group">
                          <button type="button" className="p-2 m-1 ms-0 bg-gray-800 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                          <button type="button" className="p-2 m-1 w-15 bg-sky-500 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                          <button type="button" className="p-2 m-1 w-15 bg-orange-500 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                        </div>
                      </div>
                    </div>
                    <aside className="flex flex-row">
                      <div className="text-lg font-light flex flex-column mr-1 justify-between">
                        <button
                          className="border border-black border-3 px-2 py-1"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <span className="text-lg font-semibold text-center">{item.quantity}</span>
                        <button
                          className="border border-black border-3 px-2 py-1"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      </div>
                      <div>
                        <img src={item.image} style={{  width: "100%" ,height: "100%" }} alt={item.title}/>
                      </div>
                    </aside>
                  </article>
                );
              })}
            </article>
            <div className="flex flex-row justify-between text-lg font-semibold">
              <span>Total</span> 
              <span>${(cartTotal).toFixed(2)}</span>
            </div>
            <div className="flex flex-row mt-3 justify-between">
              <a href='/cart' className='w-full'><Button variant="outline-dark" className='mr-2 rounded-0 w-full'>VIEW BAG</Button></a>
              <Button variant="custom" className='ml-2 w-full'>CHECKOUT</Button>
            </div>

          </div>
        </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CartOverlay;