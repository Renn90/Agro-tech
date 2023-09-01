import React from "react";
import ServicesP from "./ServicesP";
import ServiceCards from "./UI/ServiceCards";

const Offers = ({ aboutPage }) => {
  return (
    <div className={`${aboutPage ? "mt-[180px]" : ""} bg-[#25252549] p-6`}>
      <div className="flex flex-col justify-center items-center text-center p-6 w-[100%] m-auto md:w-[70%]">
        <h1 className="font-bold text-xl text-white py-4 md:text-4xl">
          HIGH-QUALITY WORKMANSHIP AT A FAIR PRICE
        </h1>
        <p className="text-grey">
          We offer the best quality staffs to handle your issues and profer the
          best solution and at very affordable prices, our solutions are issue
          based and our servies is top-notch
        </p>
      </div>
      <ServicesP />
    </div>
  );
};

export default Offers;
