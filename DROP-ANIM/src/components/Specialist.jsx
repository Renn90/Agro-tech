import React from 'react';
import anderson from '../assets/anderson.jpg';
import gabe from '../assets/gabe.jpg';
import ade from '../assets/ade.jpg'
import emily from '../assets/Emily.jpg'

const Specialist = ({home}) => {
   const image = 'rounded-lg h-[300px] w-[300px] object-cover object-top'
   const heading = 'font-bold text-3xl text-white my-2 md:text-xl lg:text-3xl';
   const subHead = 'font-bold text-[grey] text-xl'
     
  return ( 
    <div className={`bg-dark-grey p-4 ${home ? 'pb-[350px]' : ''}`}>
        <div className='container mx-auto'>
        <h1 className={heading}>MEET OUR TEAM</h1>
        <div className='flex flex-col justify-between md:flex-row'>
        <div className='w-[100%] my-4 md:w-[24%]'>
            <img src={ade} className={image}/>
            <h1 className={heading}>DAVID ADE</h1>
            <h3 className={subHead}>Excecutive & Founder</h3>
        </div>
        <div className='w-[100%] my-4 md:w-[24%]'>
            <img src={gabe} className={image}/>
            <h1 className={heading}>GABE FENCH</h1>
            <h3 className={subHead}>Equipment Specialist</h3>
        </div>
        <div className='w-[100%] my-4 md:w-[24%]'>
            <img src={anderson} className={image}/>
            <h1 className={heading}>MICHAEL ANDER</h1>
            <h3 className={subHead}>Operations Manager</h3>
        </div>
        <div className='w-[100%] my-4 md:w-[24%]'>
            <img src={emily} className={image}/>
            <h1 className={heading}>EMILY ROB</h1>
            <h3 className={subHead}>Customer Support</h3>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Specialist
