import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const [loginsOpenControl, setloginsOpenControl] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='relative'>
       <div className='bg-black p-3 flex justify-between items-center px-5'>
          <h1 className='text-white text-3xl cursor-pointer font-RobotoSlab font-roboto300' onClick={() => navigate('/')}>CarRentals</h1>
          <FaUser className='text-white text-2xl cursor-pointer' onClick={() => setloginsOpenControl(prev => !prev)}/>
       </div>

       <div className={`${loginsOpenControl ? 'block' : 'hidden'} bg-gray-800 flex flex-col w-20 absolute -bottom-12 right-11 z-10 border-2 rounded-md items-center sm:px-16 sm:py-2 sm:-bottom-16 md:px-24 md:py-2 md:-bottom-[71px] lg:px-28 lg:py-4 lg:-bottom-[88px]`}>
         <p className='text-white mb-4 md:text-lg lg:text-xl cursor-pointer' onClick={() => {
          setloginsOpenControl(prev => !prev) 
          navigate('/signup')}}>Login</p>
         <p className='text-white md:text-lg lg:text-xl cursor-pointer' onClick={() => {
          setloginsOpenControl(prev => !prev)
          navigate('/signup')}}>SignUp</p>
       </div>
    </div>
  )
}

export default Header