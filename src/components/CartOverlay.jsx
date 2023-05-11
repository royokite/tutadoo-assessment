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
        <section className="py-1">
          <h4 className='text-lg'>My Bag, <span className='font-normal'>{totalItems} items</span></h4>
          <div>
            <article>
              {items.map((item, index) => {
                return (
                  <article key={index} className="flex flex-row justify-between py-2">
                    <div className="flex flex-column w-1/2">
                      <span className="text-xs">{item.title}</span>
                      <span className="text-xs">{item.tag}</span>
                      <span className="font-semibold text-xs">${item.price}</span>
                      <div className="mt-2">
                        <span className="text-xs">Size:</span> <br />       
                        <div role="group" className="inline-flex justify-between">
                          <div>
                            <input type="radio" name="option" id="xs3" className="peer hidden" />
                            <label
                              htmlFor="xs3"
                              className="block cursor-pointer select-none border-2 border-black px-1 text-xs ml-0 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
                            >
                              XS
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="option"
                              id="s3"
                              className="peer hidden"                              
                            />
                            <label
                              htmlFor="s3"
                              className="block cursor-pointer select-none border-2 border-black px-1 text-xs ml-1 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
                            >
                              S
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="option" id="m" className="peer hidden" />
                            <label
                              htmlFor="m3"
                              className="block cursor-pointer select-none border-2 border-black px-1 text-xs ml-1 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
                            >
                              M
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="option"
                              id="l3"
                              className="peer hidden"
                              defaultChecked
                            />
                            <label
                              htmlFor="l3"
                              className="block cursor-pointer select-none border-2 border-black px-1 text-xs ml-1 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
                            >
                              L
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs">Color:</span> <br />   
                        <div className="inline-flex" role="group">
                          <button type="button" className="p-2 mx-1 ms-0 bg-gray-800 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                          <button type="button" className="p-2 mx-1 bg-sky-500 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                          <button type="button" className="p-2 mx-1 bg-orange-500 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                        </div>
                      </div>
                    </div>
                    <aside className="flex flex-row">
                      <div className="flex flex-column mr-1 justify-between">
                        <button
                          className="border border-black border-2 px-1"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <span className="text-lg font-semibold text-center">{item.quantity}</span>
                        <button
                          className="border border-black border-2 px-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      </div>
                      <div>
                        <img src={item.image} style={{  width: "100%" ,height: "100%"}} alt={item.title}/>
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