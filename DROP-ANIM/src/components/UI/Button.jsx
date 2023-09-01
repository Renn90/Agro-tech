import React from 'react';
import { HiArrowSmRight } from "react-icons/hi";

const Button = ({action, color}) => {
  return (
       <button className={`bg-${color} flex justify-between items-center rounded-md text-white my-2 p-2 font-bold`}>
          {action}
          <HiArrowSmRight size={40} className="mx-2 bg-grey text-white rounded-full p-2"/>
        </button>
  )
}

export default Button
