import React from "react";

const Provisions = () => {
  const circleOne =
    "absolute w-[90px] bg-[#1b471e] h-[90px] rounded-full z-1 beat";
  const circleTwo =
    "absolute w-[70px] bg-[#1f5221] h-[70px] rounded-full z-2 beat";
  const circleThree =
    "absolute w-[50px] bg-[#2e7d32] h-[50px] rounded-full z-3 beat";
  const heading =
    "font-bold text-left text-4xl text-primary md:mt-[60px] md:text-center";
  const parag = "text-l text-left text-[lightgrey] md:text-center";

  return (
    <div className="container mx-auto flex flex-col my-[80px] justify-between md:flex-row">
      <div className="flex items-center flex-row m-4 justify-between w-[100%] md:flex-col md:w-[33%] md:m[0]">
        <div className="hidden relative justify-center items-center hidden md:flex">
          <span className={circleOne} />
          <span className={circleTwo} />
          <span className={circleThree} />
          <p className="absolute text-white z-4 font-bold">1</p>
        </div>
        <div className="ml-[0px] md:ml-[0] mt:ml-[70px]">
          <h1 className={heading}>MAINTENANCE</h1>
          <p className={parag}>
          Our equipment maintenance service ensures that your rented equipment operates at its best condition.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-row m-4 justify-between w-[100%] md:flex-col md:w-[33%] md:m[0]">
      <div className="hidden relative justify-center items-center hidden md:flex">
          <span className={circleOne} />
          <span className={circleTwo} />
          <span className={circleThree} />
          <p className="absolute text-white z-4 font-bold">2</p>
        </div>
        <div className="ml-[0px] md:ml-[0] mt:ml-[70px]">
          <h1 className={heading}>REPAIRS</h1>
          <p className={parag}>
          Our skilled technicians are dedicated to keeping your agricultural equipment in top working condition.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-row m-4 justify-between w-[100%] md:flex-col md:w-[33%] md:m[0]">
      <div className="hidden relative justify-center items-center hidden md:flex">
          <span className={circleOne} />
          <span className={circleTwo} />
          <span className={circleThree} />
          <p className="absolute text-white z-4 font-bold">3</p>
        </div>
        <div className="ml-[0px] md:ml-[0] mt:ml-[70px]">
          <h1 className={heading}>DELIVERY</h1>
          <p className={parag}>
            We deliver farmers and other agricultural specialists with equipments from mowers to tractors
          </p>
        </div>
      </div>
    </div>
  );
};

export default Provisions;
