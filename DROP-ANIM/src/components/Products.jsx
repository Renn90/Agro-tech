import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Form from "./UI/Form";
import Cartcontext from "./Store/cartReducer";
import { SlCalender } from "react-icons/sl";

const Products = () => {
  const [active, setActive] = useState(1)
  const ctx = useContext(Cartcontext);
  const productCategory = ctx.state.productCategory;

  const resetCartegories =()=> {
    ctx.dispatchfn({
      type: 'RESET'
     })
     setActive(1)
  }

  const kitHandler =()=> {
   ctx.dispatchfn({
    type: 'FILTEREQUIPMENTS'
   })
   setActive(2)
  }

  const detailHandler =()=> {
    ctx.dispatchfn({
     type: 'FILTERTOOLS'
    })
    setActive(3)
   }

   const oilsHandler =()=> {
    ctx.dispatchfn({
     type: 'FILTERSYSTEMS'
    })
    setActive(4)
   }
 
  return (
    <div className="container mx-auto flex flex-col-reverse justify-center my-8 items-start md:flex-row">
      <div className=" grid grid-cols-1 my-8 w-[100%] gap-4 md:grid-cols-2">
        {productCategory.map((product) => (
          <Link to={`/store/${product.id}`} className="flex flex-col justify-between w-[95%] h-full" key={product.id} onClick={resetCartegories}>
            <img
              src={product.image1}
              className="h-[150px] w-[100%] object-cover rounded-t-md"
            />
            <div className="bg-dark-grey rounded-b-md p-4 h-full">
              <h1 className="text-white font-bold text-4xl">{product.name}</h1>
              <span className="flex justify-between w-[80%] py-4">
              {product.initialPrice ? 
                <h1 className="text-grey text-xl font-bold line-through">
                  ${product.initialPrice}&nbsp;USD
                </h1>
                 : null}
                <h1 className="text-primary text-xl font-bold">
                  ${product.price}&nbsp;USD
                </h1>
              </span>
              <p className="text-grey">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-[100%] md:sticky md:top-[100px] h-[100%] md:w-1/3">
       <Form />
        <div className="bg-dark-grey p-4">
          <h1 className="font-bold text-xl text-white">Product Cartegories</h1>
          <div className="flex flex-wrap gap-2 py-2 overflow-hidden">
          <button className={`text-white  bg-${active === 1 ? 'primary' : 'grey'} hover:bg-primary p-2 outline-none rounded-md`} onClick={resetCartegories}>
              All
            </button>
            <button className={`text-white  bg-${active === 2 ? 'primary' : 'grey'} hover:bg-primary p-2 outline-none rounded-md`} onClick={kitHandler}>
              Eqips
            </button>
            <button className={`text-white bg-${active === 3 ? 'primary' : 'grey'} hover:bg-primary p-2 outline-none rounded-md`} onClick={detailHandler}>
              Tools
            </button>
            <button className={`text-white  bg-${active === 4 ? 'primary' : 'grey'} hover:bg-primary p-2 outline-none rounded-md`} onClick={oilsHandler}>
              Systems
            </button>
          </div>
        </div>

        <div className="my-5 bg-dark-grey p-6 rounded-md">
          <h1 className="text-white text-xl font-bold">Service Hours</h1>
          <div>
            <div className="flex justify-between my-4">
              <span className="w-[100%] flex text-primary items-center font-bold">
                <SlCalender size={30} className="w-1/3 text-xl" />
                <h4>Monday -<br/> Friday</h4>
              </span>
              <h4 className="font-bold text-white">8AM-9PM</h4>
            </div>
            <div className="flex justify-between my-4">
              <span className="w-[100%] flex text-primary items-center font-bold">
                <SlCalender size={30} className="w-1/3 text-xl" />
                <h4>Saturday</h4>
              </span>
              <h4 className="font-bold text-white">8AM-7PM</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
