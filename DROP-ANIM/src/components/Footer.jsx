import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container items-start mx-auto my-[100px] flex flex-col mdx:items-center">
      <div className="flex flex-col justify-between items-start my-6 w-[100%] mdx:flex-row mdx:items-center">
        <h1 className="text-grey font-bold text-3xl hover:text-white cursor-pointer my-3 md:my-0">
          MECHANIC
        </h1>
        <ul className="flex text-white flex-col sm:flex-row">
          <NavLink to='/' className={({isActive})=>`mr-6 hover:text-primary ${isActive ? 'text-primary' : 'text-white'} cursor-pointer mb-4 sideBar:mb-0`}>Home</NavLink>
          <NavLink to='/services' className={({isActive})=>`mr-6 hover:text-primary ${isActive ? 'text-primary' : 'text-white'} cursor-pointer mb-4 sideBar:mb-0`}>Services</NavLink>
          <NavLink to='/store' className={({isActive})=>`mr-6 hover:text-primary ${isActive ? 'text-primary' : 'text-white'} cursor-pointer mb-4 sideBar:mb-0`}>Store</NavLink>
          <NavLink to='/about' className={({isActive})=>`mr-6 hover:text-primary ${isActive ? 'text-primary' : 'text-white'} cursor-pointer mb-4 sideBar:mb-0`}>About</NavLink>
          <NavLink to='/contact' className={({isActive})=>`hover:text-primary ${isActive ? 'text-primary' : 'text-white'} cursor-pointer mb-4 sideBar:mb-0`}>Contact</NavLink>
        </ul>
      </div>
      <p className="text-[grey] text-center font-medium md:text-left">
        @{new Date().getFullYear()} Mechanic. All rights "resolved : ) ". developed by
        <span className="text-primary ml-2">
          <a href="https://faithful-c.netlify.app" target="_blank">Renn.</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
