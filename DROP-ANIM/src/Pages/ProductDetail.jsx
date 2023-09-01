import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AllProducts } from "../components/Store/productsStore";
import Cartcontext from '../components/Store/cartReducer'
import { HiShoppingCart } from "react-icons/hi";

const ProductDetail = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const ctx = useContext(Cartcontext)
  const params = useParams();
  const productId = parseInt(params.productId);
  const detail = AllProducts.find((item) => item.id === productId);

  const addTocartHandler =(detail)=> {
     ctx.dispatchfn({type: 'ADDTOCART', value: detail})
     console.log(ctx.state.cart)
  }

  if (!detail) {
    return (
      <div className="text-white font-bold text-3xl p-[150px] text-center">
        NO PRODUCTS FOUND
      </div>
    );
  }

  return (
    <div className="text-white font-bold flex flex-col p-2 container my-[100px] mx-auto md:flex-row items-center">
      <img src={detail.image1} className="md:w-[50%] w-[100%] rounded-md" />
      <div className="md:m-[40px]">
        <h1 className="text-3xl font-bold text-primary my-4">{detail.name}</h1>
        <p className="my-2">{detail.description}</p>
        <h1 className="my-2">In stock: <span className="text-primary">{detail.quantity}</span></h1>
        {detail.initialPrice ? (
          <h1 className="text-grey text-xl font-bold line-through">
            ${detail.initialPrice}&nbsp;USD
          </h1>
        ) : null}
        <h1 className="text-primary text-xl font-bold">
          ${detail.price}&nbsp;USD
        </h1>
        <button
          className="outline-none flex w-[150px] justify-between items-center bg-grey p-2 font-bold text-white rounded hover:bg-primary cursor-pointer mt-2"
          onClick={()=>addTocartHandler(detail)}
        >
          Add To Cart
          <HiShoppingCart size={40} className="px-2 text-xl text-white cursor-pointer" /> 
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
