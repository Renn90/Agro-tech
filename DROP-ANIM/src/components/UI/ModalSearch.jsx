import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Form from "./Form";
import Cartcontext from "../Store/cartReducer";

const ModalSearch = () => {
  const ctx = useContext(Cartcontext);
  const closeHandler = () => {
    ctx.dispatchfn({
      type: "CLOSEMODAL",
    });
  };

  const searchArray = ctx.state.searchArray;
  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-backdrop h-[100vh] w-full  flex items-center justify-center"
        onClick={closeHandler}
      />
      <div className="z-[999] container mx-auto absolute top-[8%] bg-grey rounded-md p-5 h-[80vh] w-[100%] lg:w-[60%] overflow-auto">
        <header className="flex flex-col">
          <button
            className="place-self-end flex items-center justify-center text-white w-[40px] h-[40px] mx-2 bg-primary rounded-full p-2"
            onClick={closeHandler}
          >
            <FaXmark size={35} />
          </button>
          <Form />
          <h1 className="text-white text-xl font-bold">
            {searchArray.length <= 0 ? 'NO SEARCH RESULT FOR ' : 'search result for ' }'{ctx.state.searchValue}'
          </h1>
        </header>
        <div className="grid grid-cols-1 my-8 gap-4 md:grid-cols-2">
          {searchArray.length > 0 && (
            <>
              {searchArray.map((product) => (
                <Link
                  to={`/store/${product.id}`}
                  className="flex flex-col justify-between w-[95%] h-full"
                  key={product.id}
                  onClick={closeHandler}
                >
                  <img
                    src={product.image1}
                    className="h-[150px] w-[100%] object-cover rounded-t-md"
                    alt={product.name}
                  />
                  <div className="bg-dark-grey rounded-b-md p-4 h-full">
                    <h1 className="text-white font-bold text-4xl">
                      {product.name}
                    </h1>
                    <span className="flex justify-between w-[80%] py-4">
                      {product.initialPrice ? (
                        <h1 className="text-grey text-xl font-bold line-through">
                          ${product.initialPrice}&nbsp;USD
                        </h1>
                      ) : null}
                      <h1 className="text-primary text-xl font-bold">
                        ${product.price}&nbsp;USD
                      </h1>
                    </span>
                    <p className="text-grey">{product.description}</p>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalSearch;
