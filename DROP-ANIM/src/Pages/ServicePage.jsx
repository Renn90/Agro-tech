import React, {useEffect} from "react";
import Heading from "../components/UI/Heading";
import Pricing from "../components/Pricing";
import Offers from "../components/Offers";
import Cards from "../components/Cards";

const ServicePage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return ( 
      <div>
        <Heading headText={"SERVICES"} service={'service'}/>
        <div className="container mx-auto">
          <Cards />
          <Pricing />
        </div> 
        <Offers />
      </div>
  );
};

export default ServicePage;
