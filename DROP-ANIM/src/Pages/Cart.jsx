import React, { useContext, useEffect } from "react";
import Cartcontext from "../components/Store/cartReducer";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

const Cart = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const ctx = useContext(Cartcontext);
  const cartProducts = ctx.state.cart;

  const clearHandler = (item) => {
    ctx.dispatchfn({
      type: "CLEAR",
      value: item,
    });
  };

  const increaseItem = (item) => {
    ctx.dispatchfn({
      type: "INCREASE",
      value: item,
    });
  };

  const reduceItem = (item) => {
    ctx.dispatchfn({
      type: "REDUCE",
      value: item,
    });
  };
  return (
    <>
      {ctx.state.cart.length > 0 ? (
        <>
          {cartProducts.map((item) => (
            <div
              className="flex container my-4 mt-[100px] mx-auto items-center bg-dark-grey p-8 text-bold text-2xl justify-between"
              key={item.id}
            >
              <div className="h-[250px] rounded-md  w-[100%] flex flex-col justify-between items-center text-white md:flex-row md:h-[100%]">
                <div className="flex flex-col items-center md:flex-row">
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="w-[80px] h-[80px] rounded-full object-cover"
                  />
                  <h1 className="ml-[20px] text-center">{item.name}</h1>
                </div>
                <div className="border-2 border-primary py-1 px-6 rounded-md flex justify-between">
                  <button
                    onClick={() => reduceItem(item)}
                    disabled={item.amount <= 1}
                  >
                    -
                  </button>
                  <h2 className="px-4">{item.amount}</h2>
                  <button
                    onClick={() => increaseItem(item)}
                    disabled={item.amount >= item.quantity}
                  >
                    +
                  </button>
                </div>
                <div>$ {item.price}</div>
              </div>
              <button
                className="flex items-center justify-center text-white w-[40px] h-[40px] mx-2 bg-grey rounded-full p-2 md:ml-[40px]"
                onClick={() => clearHandler(item)}
              >
                <FaXmark size={35} />
              </button>
            </div>
          ))}
          <h1 className="container mx-auto text-white font-bold text-2xl">Total Amount: {ctx.state.totalAmount}</h1>
        </>
      ) : (
        <div className="container mx-auto text-center flex flex-col py-[100px] justify-center items-center text-white text-2xl">
          <h1>YOUR CART IS EMPTY!</h1>
          <button className="bg-primary px-4 py-2 rounded-md my-4">
            <Link to="/store">ADD ITEMS ?</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
