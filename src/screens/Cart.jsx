import React from "react";
import { useCart } from "react-use-cart";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import Button from "react-bootstrap/Button";
import "../styles/customs.css";

const Cart = () => {

  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
  } = useCart();

  if (isEmpty) {
    return <h1 className="text-center text-green-400">Your cart is empty</h1>;
  }

  return (
    <section className="py-2 container">
      <h1 className="text-3xl mb-4">CART</h1>
      <div className="row justify-content-center">
        <div>
          {items.map((item, index) => {
            return (
              <article key={index} className="flex flex-row justify-between border-y-2 py-2">
                <div className="flex flex-column">
                  <span className="font-bold text-md">{item.title}</span>
                  <span className="text-md">{item.tag}</span>
                  <span className="font-bold text-lg">${item.price}</span>
                  <div className="mt-2">
                    <span className="font-bold text-sm">SIZE:</span> <br />       
                    <div role="group" className="inline-flex justify-between mb-2">
                      {/* <button type="button" className="px-3 py-1 ms-0 text-xs font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                        XS
                      </button>
                      <button type="button" className="px-3 py-1 ml-1 text-xs font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                        S
                      </button>
                      <button type="button" className="px-3 py-1 ml-1 text-xs font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                        M
                      </button>
                      <button type="button" className="px-3 py-1 ml-1 text-xs font-medium border border-2 border-black hover:bg-green-400 hover:text-white focus:z-10 focus:ring-black focus:bg-black focus:text-white">
                        L
                      </button> */}
                      <div>
                        <input type="radio" name="option" id="xs2" className="peer hidden" />
                        <label
                          htmlFor="xs2"
                          className="block cursor-pointer select-none border-2 border-black px-3 py-1 text-xs ml-0 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
                        >
                          XS
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="option"
                          id="s2"
                          className="peer hidden"
                        />
                        <label
                          htmlFor="s2"
                          className="block cursor-pointer select-none border-2 border-black px-3 py-1 text-xs ml-1 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
                        >
                          S
                        </label>
                      </div>
                      <div>
                        <input type="radio" name="option" id="m2" className="peer hidden" />
                        <label
                          htmlFor="m2"
                          className="block cursor-pointer select-none border-2 border-black px-3 py-1 text-xs ml-1 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
                        >
                          M
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="option"
                          id="l2"
                          className="peer hidden"
                          defaultChecked
                        />
                        <label
                          htmlFor="l2"
                          className="block cursor-pointer select-none border-2 border-black px-3 py-1 text-xs ml-1 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white hover:border-green-400"
                        >
                          L
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-sm">COLOR:</span> <br />   
                    <div className="inline-flex" role="group">
                      <button type="button" className="p-3 m-0.5 ms-0 bg-gray-300 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                      <button type="button" className="p-3 m-0.5 bg-gray-800 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                      <button type="button" className="p-3 m-0.5 bg-green-800 border border-2 border-black focus:z-10 focus:ring-2 focus:ring-green-400"></button>
                    </div>
                  </div>
                </div>
                <aside className="flex flex-row">
                  <div className="text-xl font-light flex flex-column mr-4 justify-between">
                    <button
                      className="border border-black border-2 px-2 py-1"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <span className="text-md font-semibold text-center">{item.quantity}</span>
                    <button
                      className="border border-black border-2 px-2 py-1"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                  </div>
                  <div className="relative">
                    <img src={item.image} alt={item.title} className="cart-image"/>
                    <div className="flex flex-nowrap absolute bottom-1 -right-4 translate-middle">
                      <AiOutlineLeft className="text-white text-xl bg-black m-1 hover:cursor-pointer"/>
                      <AiOutlineRight className="text-white text-xl bg-black m-1 hover:cursor-pointer"/>
                    </div>
                  </div>
                </aside>
              </article>
            );
          })}
        </div>
        <div className="flex flex-column mt-2">
          <table style={{width: '15%'}}>
            <tbody>
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
            </tbody>
          </table>
          <div style={{width: '20%'}} className="mt-2">
            <Button variant="custom" className="lg:w-full order">ORDER</Button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Cart;
