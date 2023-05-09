import React from "react";
import { useCart } from "react-use-cart";
import Button from "react-bootstrap/Button";
import "../styles/customs.css";

const Cart = () => {

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return <h1 className="text-center">Your cart is empty</h1>;
  }

  return (
    <section className="py-4 container">
      <h1>CART</h1>
      <div className="row justify-content-center">
        <div className="col-12">
          {items.map((item, index) => {
            return (
              <article key={index} className="flex flex-row justify-between border-y-2 py-4">
                <div className="flex flex-column">
                  <span className="font-bold text-xl">{item.title}</span>
                  <span className="text-xl">{item.tag}</span>
                  <span className="font-bold text-lg">${item.price}</span>
                  <div className="mt-2">
                    <span className="font-bold text-lg">SIZE:</span> <br />       
                    <div role="group" className="inline-flex justify-between mb-2">
                      <button type="button" className="px-3 py-1 ms-0 text-md font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                        XS
                      </button>
                      <button type="button" className="px-3 py-1 ml-1 text-md font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                        S
                      </button>
                      <button type="button" className="px-3 py-1 ml-1 text-md font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                        M
                      </button>
                      <button type="button" className="px-3 py-1 ml-1 text-md font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                        L
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-lg">COLOR:</span> <br />   
                    <div className="inline-flex" role="group">
                      <button type="button" className="p-3 m-1 ms-0 bg-gray-300 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                      <button type="button" className="p-3 m-1 w-15 bg-gray-800 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                      <button type="button" className="p-3 m-1 w-15 bg-green-800 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                    </div>
                  </div>
                </div>
                <aside className="flex flex-row">
                  <div className="text-3xl font-light flex flex-column mr-4 justify-between">
                    <button
                      className="border border-black border-3 px-2 py-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <span className="text-xl font-semibold text-center">{item.quantity}</span>
                    <button
                      className="border border-black border-3 px-2 py-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <img src={item.image} style={{  width: "12rem" ,height: "100%" }} alt={item.title}/>
                  </div>
                </aside>
              </article>
            );
          })}
        </div>
        <div className="flex flex-column">
          <table style={{width: '15%'}}>
            <tr>
              <td>Tax 21%:</td>
              <th>${(cartTotal * 0.21).toFixed(2)}</th>
            </tr>
            <tr>
              <td>Quantity:</td>
              <th>{totalItems}</th>
            </tr>
            <tr>
              <td>Total:</td>
              <th>${(cartTotal).toFixed(2)}</th>
            </tr>
          </table>
          <div style={{width: '20%'}} className="mt-3">
            <Button variant="custom">ORDER</Button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Cart;
