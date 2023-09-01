import React from "react";
import Button from "./Button";
import schedule from '../../assets/shedule.jpg' 

const AboutWhy = () => {
  return (
    <div className="flex flex-col justify-between container mx-auto my-6 mb-[300px] md:flex-row">
      <div className="w-[100%] md:w-2/3">
        <h1 className="text-white text-4xl font-bold">WHY CHOOSE US?</h1>
        <p className="my-4 text-grey">
          We are very proud of the service we provide and stand by every product
          we carry. Our testimonials demonstrate our work quality and customer
          satisfaction.
        </p>
            <Button action={'GET STARTED'} color={'primary'}/>
      </div>
      <img src={schedule} className="w-[100%] rounded-md object-cover md:w-[300px]"/>
    </div>
  );
};

export default AboutWhy;
