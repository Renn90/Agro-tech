import React, {useEffect} from "react";
import Heading from "../components/UI/Heading";
import Locations from "../components/Locations";

const ContactPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <div>
        <Heading
          headText={"CONTACT US"}
          service={"service"}
          desc={
            "YOU CAN REACH US AT ANY OF OUR OFFICES AROUND THE COUNTRY."
          }
        />
      </div>
      <Locations />
    </>
  );
};

export default ContactPage;
