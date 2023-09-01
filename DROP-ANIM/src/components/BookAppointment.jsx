import React from "react";
import Appointment from "./AppointmentForm";
import { FaFacebook, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa6";

const BookAppointment = () => {
  return (
    <div className="container mx-auto flex flex-col text-white m-4 mdx:flex-row">
      <Appointment />
      <div className="flex flex-col justify-center m-6">
        <h1 className="font-bold text-3xl">GET AN <br/>APPOINTMENT</h1>
        <div className="flex my-8">
        <FaInstagram size={35} className="mr-2 text-primary cursor-pointer text-2xl" />
        <FaFacebook size={35} className="mr-2 text-primary cursor-pointer text-2xl" />
        <FaTwitter size={35} className="mr-2 text-primary cursor-pointer text-2xl" />
        </div> 
        <div className="flex items-center my-4">
        <BsFillEnvelopeFill size={35} className="text-2xl text-primary cursor-pointer mr-4"></BsFillEnvelopeFill>
          <a href="mailto:myautoshop@gmail.com">myautoshop@gmail.com</a>
        </div>
        <div className="flex items-center my-4">
        <FaLocationDot size={35} className="text-2xl mr-4 text-primary cursor-pointer" />
          <p>NO.80 DENNIS OSADEBE WAY AWKA</p>
        </div>
        <div className="flex items-center my-4">
        <BsFillTelephoneFill className="text-2xl mr-4 text-primary cursor-pointer" />
          <a href="mailto:myautoshop@gmail.com">+234-8240-245-2345</a>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
