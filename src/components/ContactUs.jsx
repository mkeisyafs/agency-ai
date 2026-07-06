import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const ContactUs = () => {
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

      <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
          <p className='mb-2 text-sm font-medium'>Your name</p>
          <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
            <input type="text" placeholder='Enter your name' name='name' className='w-full p-3 text-sm outline-none' required />
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Email ID</p>
          <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt="" />
            <input type="email" placeholder='Enter your email' name='email' className='w-full p-3 text-sm outline-none' required />
          </div>
        </div>

        <div className='col-span-1 sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>
          <textarea placeholder='Enter your message' name='message' className='w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 text-sm outline-none' rows="8" required></textarea>
        </div>

        <button type="submit" className='col-span-1 sm:col-span-2 flex items-center justify-center gap-2 bg-primary text-white p-3 rounded-full cursor-pointer hover:scale-103 transition-all w-36 self-center'>
          Submit <img src={assets.arrow_icon} width={14} alt="" />
        </button>
      </form>
    </div>
  )
}

export default ContactUs
