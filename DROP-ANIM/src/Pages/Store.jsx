import React, {useEffect} from "react";
import Heading from "../components/UI/Heading";
import Products from "../components/Products";

const Store = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
   
  return (
    <>
      <Heading
        headText={"STORE"}
        desc={"PLEASE NOTE THAT PRODUCTS DISPLAYED HERE ARE STRICLTY FOR LEASE AND NOT FOR SALE"}
        service={"service"}
      />
      <Products />
    </>
  );
};

export default Store;
