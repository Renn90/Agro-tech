import React from "react";
import schedule from "../assets/shedule.jpg";
import pricing from "../assets/pricing.jpg";
import prompt from "../assets/prompt.jpg";
import safety from "../assets/safety.jpg";

const ServicesP = () => {
  const card =
    "flex flex-col items-start bg-dark-grey m-2 rounded-lg w-[100%] md:w-[25%]";
  const heading = "font-bold text-2xl text-white text-left my-2";
  const parag = "text-l text-[lightgrey] my-2";

  return (
    <div className="container mx-auto my-8 flex justify-between flex-col md:flex-row">
      <div className={card}>
        <img src={schedule} className="w-[100%] rounded-t-lg" />
        <div className="mx-[10px] p-3">
          <h1 className={heading}>SCHEDULE</h1>
          <p className={parag}>
            Our company offers a convenient scheduling system to ensure seamless
            access to our services.You
            can easily schedule equipment rentals, repairs, maintenance, and
            delivery services with just a few clicks.
          </p>
        </div>
      </div>
      <div className={card}>
        <img src={pricing} className="w-[100%] rounded-t-lg" />
        <div className="mx-[10px] p-3">
          <h1 className={heading}>PRICING</h1>
          <p className={parag}>
            We believe in transparent and competitive pricing to meet the
            diverse needs of our customers. Our pricing structure is designed to
            provide excellent value for your investment.
          </p>
        </div>
      </div>
      <div className={card}>
        <img src={prompt} className="w-[100%] rounded-t-lg" />
        <div className="mx-[10px] p-3">
          <h1 className={heading}>PROMPT SERVICE</h1>
          <p className={parag}>
            We understand the importance of prompt and efficient service when it
            comes to equipment delivery. At our agricultural equipment rental
            company, we prioritize speed and reliability in our delivery
            process.
          </p>
        </div>
      </div>
      <div className={card}>
        <img src={safety} className="w-[100%] rounded-t-lg" />
        <div className="mx-[10px] p-3">
          <h1 className={heading}>SAFETY</h1>
          <p className={parag}>
            Safety is our top priority at our agricultural equipment rental
            company. We are committed to providing a safe environment for our
            customers and ensuring the well-being of all stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesP;
