import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";

const ServiceCards = () => {
  const controls = useAnimation();
  const {scrollY} = useScroll()
  const cardRef = useRef();

  useEffect(()=>{
    const element = cardRef.current
    controls.start('visible')

    const onScroll = () => {
      const currentPosition = element.offsetTop - window.innerHeight;

      if(scrollY.current >= currentPosition){
        controls.start('visible')
      }else{
        controls.start('hidden')
      }
  
    }
    window.addEventListener('scroll', onScroll);
    
    return ()=> window.removeEventListener('scroll', onScroll)

  },[controls, scrollY])

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 },},
  };


  //classes
  const classCard =
    "flex flex-col text-white bg-[#161616] m-4 rounded p-4 w-[100%] md:w-1/3 h-full";
  const images = "w-[90px] h-[90px]";
  const heading = "text-2xl font-bold my-2";

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      ref={cardRef}
      className={`flex flex-col md:flex-row mt-[-100px] md:py-6 md:mt-[-150px] items-center w-[100%]`}
    >
      <div className={classCard}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 512 512"><path fill="#2e7d32" d="m152.864 59l-4.21 20h33.816l-4.211-20zm3.698 38v14h18V97zm-30.715 32l-7.78 94h17.145l6-80h130.545l-2-14zm302.715 23v74.602a593.471 593.471 0 0 1 18 1.666V152zm-270.65 9l-4.651 62h6.3c10.003 0 19.544 4.28 29 10.645V161zm48.65 0v84.26l78 8.681v-21.296L274.327 161zm-121 80c-8 0-23.292 6.759-37.377 18.027c-10.908 8.726-21.254 19.89-28.747 31.166l16.813 4.203C56.271 269.225 87.129 253 121.561 253c50.594 0 93.48 35.024 105.586 82h20.409c-9.132-18.739-23.077-40.212-38.323-57.889c-9.33-10.819-19.063-20.19-27.945-26.601c-8.881-6.412-16.88-9.51-21.726-9.51zm217 .059V351h32.15c9.085-30.155 26.196-50.771 49.125-61.193c12.31-5.596 25.987-8.305 40.736-8.578c11.399-.212 23.445 1.049 35.989 3.54v-36.49c-11.495-1.781-25.084-3.178-39.633-4.203c-40.207-2.831-86.16-3-118.367-3.017zm176 10.814V271h14v-13.41c-3.978-2.698-9.906-4.606-14-5.717zM222.7 265.168c.054.063.11.123.164.186c19.996 23.183 37.843 51.59 47.086 75.386l4.762 12.26h-44.53c.247 2.97.38 5.97.38 9c0 7.178-.713 14.198-2.057 21h56.057V272.055zM121.562 271c-50.081 0-91 40.92-91 91s40.919 91 91 91c50.08 0 91-40.92 91-91s-40.92-91-91-91zm357 18v14h14v-14zm-357 4c38.16 0 69 30.84 69 69s-30.84 69-69 69c-38.161 0-69-30.84-69-69s30.839-69 69-69zm307.603 6.27c-12.894.164-27.37 2.264-37.879 6.923c-16.839 7.654-29.674 21.545-37.691 44.807h10.57c13.936-22.718 39.012-38 67.397-38a77.97 77.97 0 0 1 29 5.6v-15.448c-11.185-2.416-21.683-3.723-31.397-3.882zM121.562 311c-28.588 0-51 22.413-51 51s22.412 51 51 51c28.587 0 51-22.413 51-51s-22.413-51-51-51zm357 10v7.67a80.334 80.334 0 0 1 14 13.357V321zm-47 10c-33.493 0-61 27.508-61 61c0 33.492 27.507 61 61 61c33.492 0 61-27.508 61-61c0-33.492-27.508-61-61-61zm0 22c21.516 0 39 17.484 39 39s-17.484 39-39 39c-21.517 0-39-17.484-39-39s17.483-39 39-39zm-129 16v15.377l50.01 8.334c-.003-.237-.01-.473-.01-.711c0-7.988 1.219-15.71 3.464-23zm129 2c-12.095 0-21 8.905-21 21s8.905 21 21 21c12.094 0 21-8.905 21-21s-8.906-21-21-21z"/></svg>
        <h1 className={heading}>EQUIPMENT RENTAL</h1>
        <p>
          At AgroTech Rental Services and Solutions, we offer a comprehensive
          range of top-quality agricultural equipment for rent.
        </p>
      </div>
      <div className={classCard}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="#2e7d32" d="M20.96 16.45c.01-.15.04-.3.04-.45v.5l-.04-.05M11 16c0 .71.15 1.39.42 2H6v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8l2.08-6c.2-.58.76-1 1.42-1h11c.66 0 1.22.42 1.42 1L21 11v5c0-2.76-2.24-5-5-5s-5 2.24-5 5m-3-2.5c0-.83-.67-1.5-1.5-1.5S5 12.67 5 13.5S5.67 15 6.5 15S8 14.33 8 13.5M19 10l-1.5-4.5h-11L5 10h14m3.87 11.19l-4.11-4.11c.41-1.04.18-2.26-.68-3.11c-.9-.91-2.25-1.09-3.34-.59l1.94 1.94l-1.35 1.36l-1.99-1.95c-.54 1.09-.29 2.44.59 3.35a2.91 2.91 0 0 0 3.12.68l4.11 4.1c.18.19.45.19.63 0l1.04-1.03c.22-.18.22-.5.04-.64Z"/></svg>
        <h1 className={heading}>EQIPMENT REPAIR</h1>
        <p>
          Our equipment repair and maintenance services are designed to ensure
          that your machinery operates efficiently, minimizing downtime and
          maximizing productivity.
        </p>
      </div>
      <div className={classCard}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="#2e7d32" fillRule="evenodd" d="M1 3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v5h4a5 5 0 0 1 5 5v4a3.001 3.001 0 0 1-2.129 2.872a3 3 0 0 1-5.7.128H8.83a3 3 0 0 1-5.7-.128A3.001 3.001 0 0 1 1 17v-4h6a1 1 0 1 0 0-2H1V9h4a1 1 0 0 0 0-2H1V3Zm13 15h1.171a3 3 0 0 1 5.536-.293A.997.997 0 0 0 21 17v-4a3 3 0 0 0-3-3h-4v8Zm-7 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm10.293-.707A.994.994 0 0 0 17 19a1 1 0 1 0 .293-.707Z" clipRule="evenodd"/></svg>
        <h1 className={heading}>DELIVERY & PICK-UP</h1>
        <p>Our delivery and pickup services ensure that you have access to the agricultural equipment you need, exactly when and where you need it.</p>
      </div>
    </motion.div>
  );
};

export default ServiceCards;
