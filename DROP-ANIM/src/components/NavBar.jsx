import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Cartcontext from "./Store/cartReducer";
import { HiShoppingCart } from "react-icons/hi";

const NavBar = ({ onopen }) => {
  const [openSideBar, setOpenSideBar] = useState(null);
  const [bg, setbg] = useState('bg-black')
  useEffect(() => {
    onopen(openSideBar);
  }, [openSideBar]);

  const openBarHandler = () => {
    setOpenSideBar((prev) => !prev);
  };

  window.onresize = () => {
    if (window.innerWidth >= 900) {
      setOpenSideBar(null);
    }
  };

  const close = () => {
    setOpenSideBar(false);
  };

  let slide = null;

  if (openSideBar && window.innerWidth < 900) {
    slide = "animate-slide-in";
  } else if (!openSideBar && window.innerWidth < 900) {
    slide = "animate-slide-out";
  }

  const ctx = useContext(Cartcontext)

    function changeBackground(){
      if(window.scrollY > 500){
       setbg('blurbg')
      }else{
       setbg('bg-black')
      }
    }
  
    window.addEventListener('scroll', changeBackground)

  return (
    <div className={`flex fixed top-0 ${bg} p-4 z-[999] w-[100%]`}>
      {openSideBar && (
        <div
          className="fixed inset-0 z-[9] bg-backdrop h-[100vh] w-full  flex items-center justify-center"
          onClick={close}
        />
      )}
      <div className="flex justify-between items-center container mx-auto xl:m-w-xl">
        <div className="flex w-1/3">
          <Link
            to="/"
            className="text-grey font-bold text-3xl hover:text-white cursor-pointer"
          >
            AGROTECH
          </Link>
        </div>
        <div
          className={`flex fixed left-0 z-40 top-0 w-[60%] h-[100%] ${!window.screenY > 500 && '' , openSideBar && 'bg-black'}  flex-col items-start transform translate-x-[-500px] sideBar:translate-x-[0px] sideBar:items-center sideBar:w-2/3 sideBar:justify-between sideBar:flex-row sideBar:relative md:w-[40%] ${slide}`}
        >
          <div className="flex text-lg m-8 sideBar:m-0 z-[99]">
            <ul className="flex flex-col text-white sideBar:flex-row">
              <NavLink
                to="/"
                onClick={close}
                className={({ isActive }) =>
                  `mr-6 hover:text-primary__bright ${
                    isActive ? "text-primary__bright" : "text-white"
                  } cursor-pointer mb-4 sideBar:mb-0`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                onClick={close}
                className={({ isActive }) =>
                  `mr-6 hover:text-primary__bright ${
                    isActive ? "text-primary__bright" : "text-white"
                  } cursor-pointer mb-4 sideBar:mb-0`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/store"
                onClick={close}
                className={({ isActive }) =>
                  `mr-6 hover:text-primary__bright ${
                    isActive ? "text-primary__bright" : "text-white"
                  } cursor-pointer mb-4 sideBar:mb-0`
                }
              >
                Store
              </NavLink>
              <NavLink
                to="about"
                onClick={close}
                className={({ isActive }) =>
                  `mr-6 hover:text-primary__bright ${
                    isActive ? "text-primary__bright" : "text-white"
                  } cursor-pointer mb-4 sideBar:mb-0`
                }
              >
                About
              </NavLink>
              <NavLink
                to="contact"
                onClick={close}
                className={({ isActive }) =>
                  `mr-6 hover:text-primary__bright ${
                    isActive ? "text-primary__bright" : "text-white"
                  } cursor-pointer mb-4 sideBar:mb-0`
                }
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <div className="flex text-lg items-center">
            <Link to="/cart" className="flex relative">
            {ctx.state.cart.length > 0 && <h1 style={{maxWidth: '30px', maxHeight: '30px'}} className="flex justify-center items-center w-[100%] h-[100%] text-white rounded-full bg-[#113813] p-2 absolute top-[-10px] left-[-10px]">{ctx.state.cart.length}</h1>}
              <HiShoppingCart size={40} className="hidden text-3xl text-primary cursor-pointer sideBar:block"/>
            </Link>
            <Link
              to="/contact"
              className="bg-grey ml-4 p-2 font-bold text-white rounded hover:bg-primary cursor-pointer mt-8 sideBar:mt-0"
            >
              GET AN APOINTMENT
            </Link>
          </div>
        </div>
        <div className="flex items-center sideBar:hidden">
        <Link to="/cart" className="flex relative">
            {ctx.state.cart.length > 0 && <h1 style={{maxWidth: '30px', maxHeight: '30px'}} className="flex text-sm justify-center items-center w-[100%] h-[100%] text-white rounded-full bg-[#113813] p-2 absolute top-[-10px] left-[-7px]">{ctx.state.cart.length}</h1>}
            <HiShoppingCart size={40} className="text-3xl text-primary cursor-pointer mx-4" />
            </Link>
          <div className="bar relative z-50" onClick={openBarHandler}>
            <span className={openSideBar ? "active" : null} />
            <span className={openSideBar ? "active" : null} />
            <span className={openSideBar ? "active" : null} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
