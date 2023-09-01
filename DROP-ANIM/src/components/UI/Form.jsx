import React, { useContext, useState, useEffect } from "react";
import Cartcontext from "../Store/cartReducer";

const Form = () => {

    const [searchValue, setSearchValue] = useState('')
    const ctx = useContext(Cartcontext)
    
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[ctx.state.cartModal])

    const searchHandler =(e)=> {
      e.preventDefault();
      ctx.dispatchfn({
        type: 'SEARCH', value: searchValue,
      })
      setSearchValue('')
    }
  return (
    <form className="p-4 bg-dark-grey my-5 flex justify-center rounded-md">
      <input
        type="text"
        placeholder="Search"
        className="p-2 border-none outline-none rounded-md w-[100%]"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
      <button
        className="rounded-md ml-2 bg-primary px-4 py-2 font-bold text-white search-btn"
        disabled={searchValue.length < 1}
        onClick={searchHandler}
      >
        Search
      </button>
    </form>
  );
};

export default Form;
