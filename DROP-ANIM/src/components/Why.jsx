import React, { useEffect, useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import {useScroll, useAnimation, motion} from 'framer-motion'
import { useRef } from "react";

const heading =
  "md:text-5xl text-3xl text-transparent bg-clip-text font-bold uppercase cursor-pointer";

const Why = () => {
  const {scrollY} = useScroll();
  const controls = useAnimation();
  const whyRef = useRef();

  useEffect(()=>{
    const element = whyRef.current
    controls.start('visible');

    const onScroll =()=> {
      const scrollPosition = element.offsetTop - window.innerHeight;

      if (scrollY.current >= scrollPosition) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  },[controls, scrollY])

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 },},
  };

  const [show, toggleShow] = useToggle(false);
  const [showSecond, toggleSecond] = useToggle(false);
  const [showThird, toggleThird] = useToggle(false);
  

  function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    const toggle = () => setValue(!value);
    return [value, toggle];
  }

  return (
    <motion.div ref={whyRef}
        variants={variants}
        initial="hidden"
        animate={controls}
    >
    <div className="container flex flex-col justify-between w-[100%] text-white mx-auto p-4 items-center md:flex-row">
      <div className="w-[100%] md:w-[30%]">
        <h1 className="font-bold text-5xl">Why us?</h1>
        <p className="text-xl my-2">
          Your satisfaction is our priority. We strive to exceed your
          expectations by offering excellent customer service, transparent
          communication, and a commitment to resolving your equipment issues
          efficiently.
        </p>
        <button className="flex items-center justify-between bg-primary rounded-md text-white my-2 p-2">
          VIEW MORE
          <HiArrowSmRight size={40} className="mx-2 bg-transwhite text-white rounded-full p-2" />
        </button>
      </div>
      <div className="flex-col justify-center w-[100%] md:w-[65%] md:m-5">
        <div className="my-6">
          <h1
            className={heading}
            style={{ WebkitTextStroke: `${show ? "2px #2e7d32" : "2px grey"}` }}
            onClick={toggleShow}
          >
            ADVANCED TECHNOLOGY
          </h1>
          {show && (
            <p className="text-grey">
              Our team of skilled technicians utilizes the latest test
              techniques and digital information systems.
            </p>
          )}
        </div>
        <div className="my-6">
          <h1
            className={heading}
            style={{
              WebkitTextStroke: `${showSecond ? "2px #2e7d32" : "2px grey"}`,
            }}
            onClick={toggleSecond}
          >
            RELIABLE REPAIRS
          </h1>
          {showSecond && (
            <p className="text-grey">
             We prioritize prompt and reliable repair services. Our technicians promptly diagnose and address equipment issues, minimizing downtime and getting you back to work quickly.
            </p>
          )}
        </div>
        <div className="my-6">
          <h1
            className={heading}
            style={{
              WebkitTextStroke: `${showThird ? "2px #2e7d32" : "2px grey"}`,
            }}
            onClick={toggleThird}
          >
            COMMITMENT TO QUALITY
          </h1>
          {showThird && (
            <p className="text-grey">
              We are dedicated to delivering high-quality repairs and maintenance. Our meticulous approach, combined with advanced technology, ensures accurate diagnosis and effective solutions.
            </p>
          )}
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Why;
