import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-[80px] hero-background text-white h-[100%] min-h-[540px] max-h-[650px]">
      <motion.div
        initial={{ translateX: "-50px", opacity: 0 }}
        animate={{ translateX: "0px", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container xl:mx-w-xl mx-auto p-4 flex flex-col justify-between py-[10%]">
          <h1 className="font-bold text-3xl w-[80%] my-2 md:text-5xl">
            AGRO-TECH RENTAL SEVICES AND SOLUTIONS
          </h1>
          <p className="text-xl w-[70%] my-2 sm: w-[50%]">
            Experience top-quality, reliable, and customer-centric agricultural
            equipment rentals for all your needs
          </p>
          <div className="flex justify-between items-center w-[100%] max-w-[300px] bg-transwhite p-2 my-2 hover:bg-primary rounded-lg">
            <p className="text-xl cursor-pointer">BOOK APPOINTMENT</p>
            <HiArrowSmRight
              size={40}
              className="mx-2 bg-white text-primary rounded-full p-2"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
