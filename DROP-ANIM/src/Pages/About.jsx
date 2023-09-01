import React, { useEffect } from "react";
import Heading from "../components/UI/Heading";
import AboutWhy from "../components/UI/AboutWhy";
import Testimonial from "../components/Testimonial";
import Offers from "../components/Offers";
import Specialist from "../components/Specialist";
import Pricing from "../components/Pricing";

const About = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return ( 
    <div>
      <Heading
        headText={"WHO WE ARE"}
        service={"about"}
        desc={
          "We are focused on providing our clients with the highest level of quality and excellent customer support."
        }
      />
      <div className="container mx-auto">
      <AboutWhy />
      <Testimonial />
      <Offers aboutPage={true}/>
      <Specialist />
      <Pricing />
      </div>
    </div>
  );
};

export default About;
