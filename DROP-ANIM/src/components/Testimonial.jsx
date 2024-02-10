import React, { useState } from "react";
import jessica from "../assets/jessica.jpg";
import kristine from "../assets/kristine.jpg";
import chike from "../assets/chike.jpg";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";

const testimonialsData = [
  {
    image: kristine,
    name: "KRISTIN WATSON",
    title: "AGROCARE FARMS",
    id: "1",
    paragraph:
      "Agro-Tech Solutions has been instrumental in supporting our farm operations. Their equipment rentals have been reliable, allowing us to efficiently carry out various tasks. The team at Agro-Tech Solutions is professional, responsive, and always willing to go the extra mile.",
  },
  {
    image: chike,
    name: "JOSHUA CHIKA",
    title: "SUNSHINE FARMS",
    id: "2",
    paragraph:
      "We have been relying on Agro-Tech Solutions for our equipment maintenance needs, and they have consistently delivered exceptional service. Their technicians are skilled and thorough, ensuring that our machinery is in optimal condition. Agro-Tech Solutions has been a trusted partner, and we value their expertise and commitment to quality.",
  },
  {
    image: jessica,
    name: "JESSICA Kwonle",
    title: "Entrepreneur",
    id: "3",
    paragraph:
      "I was blown away by the level of service I received from Mechanic 128. They were professional, friendly, and really took the time to explain what was wrong with my car and how they were going to fix it. I never felt like I was being taken advantage of. They have a customer for life!",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrent] = useState(0);
  const [slideClass, setSlideClass] = useState(null);
  const next = () => {
    setSlideClass(null);
    setTimeout(() => {
      setCurrent((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
      setSlideClass("slide-right");
    }, 50);
  };

  const prev = () => {
  setSlideClass(null);
  setTimeout(() => {
    setCurrent((prevIndex) =>
      prevIndex <= 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
    setSlideClass("slide-left");
  }, 50);
};


  const current = testimonialsData[currentIndex];

  return (
    <div className="mt-[-200px] max-w-[1440px] mx-auto">
      <div className="text-white flex flex-col relative items-center border border-primary rounded p-8 m-4 bg-black md:flex-row">
        <div className="relative flex justify-center w-[100%] md:w-[40%] md:absolute">
          <div>
            <img
              src={current.image}
              className={`rounded-lg h-[300px] w-[500px] object-cover object-top ${slideClass ? slideClass : ""} md:h-[500px]`}
            />
          </div>
          <div className="flex absolute justify-start top-[90%] left-[0%] w-[100%] text-black md:justify-between md:top-[50%] md:justify-center">
            <HiArrowNarrowLeft size={50}
              className="bg-grey rounded-full p-4 cursor-pointer m-4 md:m-0"
              onClick={prev}
            />
            <HiArrowNarrowRight size={50}
              className="bg-primary rounded-full p-4 cursor-pointer m-4 md:m-0"
              onClick={next}
            />
          </div>
        </div>
        <div className="w-[100%] ml-[0%] mt-[50px] md:w-[50%] md:ml-[50%] md:mt-[0px]">
          <h1 className="text-3xl font-bold my-4">WHAT OUR CUSTOMERS SAY</h1>
          <p className={`text-l ${slideClass ? slideClass : ""}`}>
            {current.paragraph}
          </p>
          <h2
            className={`text-2xl text-primary font-bold my-4 ${
              slideClass ? slideClass : ""
            }`}
          >
            {current.name}
          </h2>
          <p className={`text-grey text-xl ${slideClass ? slideClass : ""}`}>
            {current.title}
          </p>
          <div className="my-4 flex">
            <div
              className={`h-[10px] w-[10px] bg-grey ${
                current.id === "1" ? "bg-primary trans-width" : "bg-grey"
              } rounded-full mx-1`}
            />
            <div
              className={`h-[10px] w-[10px] bg-grey ${
                current.id === "2" ? "bg-primary trans-width" : "bg-grey"
              } rounded-full mx-1`}
            />
            <div
              className={`h-[10px] w-[10px] bg-grey ${
                current.id === "3" ? "bg-primary trans-width" : "bg-grey"
              } rounded-full mx-1`}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Testimonial;
