import React, { useState } from "react";
import question from "../assets/question.jpg";
import { HiChevronDown } from "react-icons/hi";

const QandA = () => {
  
const [display, setDisplay] = useState(null);

  const changeDisplay = (index) => {
    setDisplay(index === display ? null : index);
  };

  const heading = "font-bold text-xl text-white md:text-2xl";
  const parag = "text-[grey] text-l py-1 my-2  slide-down";
  const arrow =
    "p-2 rounded-full mx-4 border-2 font-bold text-white cursor-pointer";
  const arrowDiv = "flex items-start justify-between my-4";
  const qusCont = "my-[40px]";


  return (
    <div className=" bg-dark-grey p-[10px] mdx:p[80px]">
      <div className="container mx-auto my-6 items-center flex flex-col mdx:flex-row">
        <div className="text-white w-[100%] mdx:w-[40%]">
          <h1 className="font-bold text-3xl">FAQS & NEWS</h1>
          <p className="text-xl py-4">
            Customer satisfaction is the measure of our success. Our unique
            service promises mean a commitment to finding the best possible
            solution to any problem.
          </p>
          <img src={question} alt="red car" className="rounded" />
        </div>
        <div className="w-[100%] mdx:pl-[80px] mdx:w-[60%]">
          <div className={qusCont}>
            <div className={arrowDiv}>
              <h1 className={heading}>
                HOW LONG CAN I RENT THE EQUIPMENT FOR?
              </h1>
              <div className={`${arrow} ${
                  display === 1 && "rotate"
                }`}
                onClick={() => changeDisplay(1)}>
              <HiChevronDown />
              </div>
            </div>
              <p className={`${parag} ${display === 1 ? 'slide-down' : 'slide-up'}`}>
                We offer flexible rental periods to accommodate your specific
                needs. Whether you need equipment for a day, a week, or a longer
                duration, we can work with you to find the most suitable rental
                arrangement.
              </p>
            <hr />
          </div> 
          <div className={qusCont}>
            <div className={arrowDiv}>
              <h1 className={heading}>
                HOW DO I SCHEDULE AN EQUIPMENT RENTAL?
              </h1>
              <div className={`${arrow} ${
                  display === 2 && "rotate"
                }`}
                onClick={() => changeDisplay(2)}>
              <HiChevronDown />
              </div>
            </div>
            <p className={`${parag} ${display === 2 ? 'slide-down' : 'slide-up'}`}>
                Scheduling an equipment rental is easy! You can visit our
                website and browse through our inventory to select the equipment
                you need. Once you've made your selection, simply fill out the
                online form or contact our customer service team to finalize the
                rental details.
              </p>
            <hr />
          </div>
          <div className={qusCont}>
            <div className={arrowDiv}>
              <h1 className={heading}>
                DO YOU PROVIDE DELIVERY AND PICKUP SERVICES?
              </h1>
              <div className={`${arrow} ${
                  display === 3 && "rotate"
                }`}
                onClick={() => changeDisplay(3)}>
              <HiChevronDown />
              </div>
            </div>
            <p className={`${parag} ${display === 3 ? 'slide-down' : 'slide-up'}`}>
                Yes, we offer convenient delivery and pickup services. our team
                will ensure that the rented equipment is delivered to your
                desired location and picked up at the end of the rental period,
                saving you time and effort.
              </p>
            <hr />
          </div>
          <div className={qusCont}>
            <div className={arrowDiv}>
              <h1 className={heading}>WHAT PAYMENT METHODS DO YOU ACCEPT?</h1>
              <div className={`${arrow} ${
                  display === 4 && "rotate"
                }`}
                onClick={() => changeDisplay(4)}>
              <HiChevronDown />
              </div>
            </div>
            <p className={`${parag} ${display === 4 ? 'slide-down' : 'slide-up'}`}>
                We accept various payment methods, including credit cards, debit
                cards, and bank transfers. Please contact our customer service
                team for detailed payment information and options.
              </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QandA;
