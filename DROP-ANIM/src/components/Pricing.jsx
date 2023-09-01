import React from "react";
import Button from "./UI/Button";
import { HiCheck } from "react-icons/hi";

const Pricing = () => {
  const service = "my-[20px] flex items-center";

  return (
    <div
      className={`container mx-auto text-white mt-[100px] flex flex-col items-center`}
    >
      <h1 className="font-bold text-3xl my-2 text-center">CHOOSE YOUR PACK</h1>
      <p className="text-center text-[grey] my-4 text-l md:mx-[20%]">
        In our pricing section, we offer a range of flexible and cost-effective
        packages to suit your specific needs. Whether you're a small-scale
        farmer or managing a larger agricultural operation, we have the right
        package for you.
      </p>
      <div className="flex flex-col justify-between w-[100%] md:flex-row">
        <div className="bg-dark-grey p-8 rounded w-[100%] my-4 w-[100%] md:w-[32%]">
          <p className="text-grey ">STARTER PRICE</p>
          <span className="flex">
            <h2 className="my-2 font-bold text-4xl">$139</h2>
            <s className="m-2 text-grey text-2xl">$300</s>
          </span>
          <div>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Eqipment Rental</p>
            </span>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Maintenance and Repair</p>
            </span>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Consultation and Expert Advice</p>
            </span>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Custom Solutions for Farming</p>
            </span>
          </div>
          <Button action="GET STARTED" color="grey" />
        </div>
        <div className="bg-[#1b5e20] p-8 rounded w-[100%] border border-primary my-4 md:w-[32%]">
          <p className="text-grey ">REGULAR PRICE</p>
          <span className="flex">
            <h2 className="my-2 font-bold text-4xl">$290</h2>
            <s className="m-2 text-grey text-2xl">$499</s>
          </span>
          <div>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Eqipment Rental</p>
            </span>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Maintenance and Repair</p>
            </span>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Consultation and Expert Advice</p>
            </span>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Custom Solutions for Farming</p>
            </span>
          </div>
          <Button action="GET STARTED" color="primary" />
        </div>
        <div className="bg-dark-grey p-8 rounded w-[100%] my-4 md:w-[32%]">
          <p className="text-grey ">ADVANCED PRICE</p>
          <span className="flex">
            <h2 className="my-2 font-bold text-4xl">$380</h2>
            <s className="m-2 text-grey text-2xl">$799</s>
          </span>
          <div>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Eqipment Rental</p>
            </span>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Maintenance and Repair</p>
            </span>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Consultation and Expert Advice</p>
            </span>
            <span className={service}>
              <HiCheck
                size={30}
                className="text-primary rounded-full p-2 bg-[#19441b] mr-2"
              />
              <p>Custom Solutions for Farming</p>
            </span>
          </div>
          <Button action="GET STARTED" color="grey" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
