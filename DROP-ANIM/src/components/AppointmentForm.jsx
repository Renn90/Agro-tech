import React from 'react'
import Button from './UI/Button';

const Appointment = () => {
  const labInp = 'flex flex-col';
  const label = 'text-white mb-2'
  const flex = ' flex flex-col my-8 md:flex-row';
  const input = 'py-4 px-8 mr-4 rounded bg-transparent border border-grey mb-2 focus:outline-none focus:border-primary'

  return (
      <form className='bg-dark-grey p-8 w-[100%] mdx:w-[60%]'>
        <div className={flex}>
            <span className={labInp}>
                <label htmlFor='name' className={label}>Name</label>
                <input type='text'  id='name' placeholder='Your name...' className={input}/>
            </span>
            <span className={labInp}>
                <label htmlFor='number' className={label}>Phone</label>
                <input type='number'  id='number' placeholder='Your Phone Number...' className={input}/>
            </span>
        </div>
        <div className={flex}>
            <span className={labInp}>
                <label htmlFor='carModel' className={label}>Farm</label>
                <input type='text' id='carModel' placeholder='Enter your farm address...' className={input}/>
            </span>
            <span className={labInp}>
                <label htmlFor='email' className={label}>Email Address</label>
                <input type='email'  id='email' placeholder='Your email address...' className={input}/>
            </span>
        </div>
        <div className={labInp}>
            <label htmlFor='message' className={label}>Message</label>
            <input type='text' id='message' placeholder='send us a message...' className={input}/>
        </div>
        <Button  color='primary' id='submit' action='BOOK AN APPOINTMENT' /> 
      </form>
  )
}

export default Appointment
