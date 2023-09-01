import React from 'react' 
import { easeIn, motion } from 'framer-motion'

const Heading = ({headText, desc, service}) => {
  return ( 
    <div className={`${service} flex flex-col justify-center items-center h-[300px] flex m-4 mx-auto w-[100%]`}>
      <motion.h1
      initial={{translateY: '30px', opacity: '0'}}
      animate={{translateY: '0px', opacity: '1', transition: {duration: 0.3}}}
      className='p-4 text-white font-bold text-4xl text-center'>{headText}</motion.h1>
      <motion.p 
       initial={{translateY: '40px', opacity: '0'}}
       animate={{translateY: '0px', opacity: '1',transition: {duration: 0.5}}}
      className='text-white text-xl text-center md:w-[70%] sm:text-2xl'>{desc}</motion.p>
    </div>
  )
}

export default Heading
