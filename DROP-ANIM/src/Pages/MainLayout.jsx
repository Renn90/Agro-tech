import React, { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import BookAppointment from '../components/BookAppointment';
import { useState } from 'react';
import Footer from '../components/Footer';
import ModalSearch from '../components/UI/ModalSearch';
import Cartcontext from '../components/Store/cartReducer';

const MainLayout = () => {
    const [open, setOpen] = useState(false)
    const ctx = useContext(Cartcontext); 
    const searchModal = ctx.state.cartModal;

    useEffect(()=>{
      if(open || searchModal){
       document.body.style.overflowY='hidden'
      }else if(!open || !searchModal){
        document.body.style.overflowY='auto' 
      }
    },[open, searchModal])

  return (
    <div>
      <NavBar  onopen={setOpen}/>
      <Outlet />
      <BookAppointment />
      <Footer />
      <div className='flex flex-col justify-center items-center'>
      {ctx.state.cartModal && <ModalSearch />}
      </div>
    </div>
  )
}

export default MainLayout