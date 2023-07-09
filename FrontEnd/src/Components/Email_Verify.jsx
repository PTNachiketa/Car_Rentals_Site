import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import carimg from '../Assets/Login_car_image.jpg'

const Email_Verify = ({ otpBoxDisable }) => {
    return (
        <>
            <div>
                <div className='flex flex-col sm:ml-28 lg:ml-40'>
                    <h1 className='text-xl font-YsabeauInfant ml-0 mb-6 sm:text-2xl md:text-3xl'>Welcome to CarRentals</h1>

                    <div className='flex border-2 border-gray-200 rounded-md p-3 items-center gap-3 cursor-pointer hover:bg-black hover:text-white mb-1'>
                        <FcGoogle className='text-2xl' />
                        <p className='text-lg'>Continue with Google</p>
                    </div>

                    <div className='flex items-center justify-center mb-1'>or</div>

                    <div className='flex flex-col mb-9'>
                        <label htmlFor='email' className='text-md mb-2'>Email</label>
                        <input type='email' id='email' placeholder='Your email' className='border-2  border-gray-200 rounded-md w-[300px] h-[40px]' />
                    </div>

                    <div>
                        <input type='text' placeholder='Enter OTP' disabled={otpBoxDisable} className='border-2 border-gray-200 rounded-md w-[300px] h-[40px] mb-9 text-start' />
                    </div>

                    <div className='flex items-center'>
                        <button type='button' className='text-xl font-YsabeauInfant bg-black text-white p-2 rounded-lg'>Accelerate</button>
                    </div>
                </div>

                <div>
                    <img src={carimg} height={200} className='bg-contain h-72 sm:w-[200px] md:w-[250px] sm:h-[300px] md:h-96 lg:w-[330px] rounded-md'/>
                </div>
            </div>
        </>
    )
}

export default Email_Verify