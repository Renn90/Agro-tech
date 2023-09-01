import React from "react";
import map from '../assets/mapImg.png'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs"



const locations = [
  {
    heading: "Lagos",
    street: "123 Agro Way", 
    city: "Lagos",
    country: "Nigeria",
    email: "lagos@agrotech.com",
    phone: "+234-123-456-789",
  },
  {
    heading: "Abuja",
    street: "456 Farm St.",
    city: "Abuja",
    country: "Nigeria",
    email: "abuja@agrotech.com",
    phone: "+234-987-654-321",
  },
  {
    heading: "Kano",
    street: "789 Agri Road",
    city: "Kano",
    country: "Nigeria",
    email: "kano@agrotech.com",
    phone: "+234-555-555-555",
  },
];

const Locations = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center container mx-auto md:flex-row w-[100%]">
        {locations.map((location) => (
          <div className="bg-dark-grey m-4 p-8 h-full rounded-md w-[100%]" key={location.city}>
            <h1 className="font-bold text-white text-3xl py-4">
              {location.heading} Office
            </h1>
            <span className="flex items-center py-2">
              <FaLocationDot size={35} className="text-primary text-xl pr-4" />
              <p className="text-white text-l">
                {location.street},{location.city},<br />
                {location.country}
              </p>
            </span>
            <span className="flex items-center py-2">
              <BsFillTelephoneFill size={35} className="text-primary text-xl pr-4" />
              <p className="text-white text-l">{location.phone}</p>
            </span>
            <span className="flex items-center py-2">
              <BsFillEnvelopeFill size={35} className="text-primary text-xl pr-4" />
              <p className="text-white text-l">{location.email}</p>
            </span>
          </div>
        ))}
      </div>
      <img
        src={map}
        alt=""
        className="w-full rounded-lg m-4 container mx-auto opacity-60"
      />
      <div className="bg-dark-grey text-center p-6 py-[50px] my-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mx-auto w-[100%] md:w-[50%]">
            SERVICES INCLUDED IN EVERY PLAN
          </h1>
          <p className="text-grey text-l w-[100%] mx-auto p-2 md:w-[70%]">
            Visit us at our listed offices, we are always available to check
            your vehicle's status, service history, and repair history, view
            reviews of our services, and much more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Locations;
