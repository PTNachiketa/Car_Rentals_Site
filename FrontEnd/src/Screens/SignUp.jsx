import React, { useState } from 'react'
import Header from '../Components/Header'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import carimg from '../Assets/Login_car_image.jpg'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

     const navigate = useNavigate()

     const [otpBoxDisable, setOtpBoxDisable] = useState(true)
     const [phoneNumberVerified, setPhoneNumberVerified] = useState(false);

     return (
          <>
               <Header />
               <div className='flex justify-center'>

                    {/* PhoneNumber */}
                    <div className={`${phoneNumberVerified ? 'hidden' : 'block'} flex mt-24 gap-5`}>

                         <div className='flex flex-col mt-14'>
                              <h1 className='text-xl font-YsabeauInfant ml-0 mb-8 sm:text-2xl md:text-3xl'>Welcome to CarRentals</h1>

                              <div className='flex flex-col mb-7'>
                                   <label className='text-md mb-2'>Phone Number</label>
                                   <PhoneInput
                                        country="in"
                                        onlyCountries={['in']}
                                   />
                              </div>

                              <div>
                                   <input type='text' placeholder='Enter OTP' disabled={otpBoxDisable} className='border-2 border-gray-200 rounded-md w-[300px] h-[40px] mb-7 text-start' />
                              </div>

                              <div className='flex gap-2 items-center mb-5'>
                                   <button type='button' className='text-xl font-RobotoSlab bg-black text-white p-2 rounded-lg'>Get OTP</button>
                                   <button type='button' className='text-xl font-RobotoSlab bg-black text-white p-2 rounded-lg' onClick={() => setPhoneNumberVerified(true)}>Accelerate</button>
                              </div>

                              <p>Already have an account? <span className='text-lg text-blue-400 underline cursor-pointer' onClick={() => {navigate('/login')}}>Login here</span></p>
                         </div>

                         {/* CarImage */}
                         <div>
                              <img src={carimg} height={200} className={`${phoneNumberVerified ? 'mt-14' : 'sm:block'} mt-14 hidden bg-contain h-64 md:block lg:block sm:w-[200px] sm:h-[300px] md:h-72 md:w-[210px] lg:h-80 lg:w-[270px] rounded-md`} />
                         </div>
                    </div>


                    {/* Email */}
                    <div className={`${phoneNumberVerified ? 'block' : 'hidden'} flex justify-center items-center mt-3 sm:mt-24`}>

                         <div className='flex flex-col justify-center items-center'>
                              <h1 className='text-xl font-YsabeauInfant ml-0 mb-2 sm:text-2xl md:text-3xl'>Welcome to CarRentals</h1>

                              <div className='flex items-center justify-center text-3xl text-white rounded-full h-8 w-8 bg-black border-2 border-gray-600 mb-1'><FcGoogle className='text-xl' /></div>

                              <h1 className='text-xl sm:mb-4 md:mb-4 lg:mb-4'>or</h1>

                              <div className='flex flex-col items-center sm:grid sm:grid-cols-2'>

                                   <div className='flex flex-col sm:mr-3 mb-2'>
                                        <label htmlFor='name' className='mb-1'>Name: </label>
                                        <input type='text' id='name' placeholder='Enter your name' className='border-2 border-gray-400 rounded-md h-10 w-64' />
                                   </div>

                                   <div className='flex flex-col mb-2'>
                                        <label htmlFor='age' className='mb-1'>Age: </label>
                                        <input type='number' id='age' placeholder='Enter your age' className='border-2 border-gray-400 rounded-md h-10 w-64' />
                                   </div>

                                   <div className='flex flex-col mb-2'>
                                        <label htmlFor='location' className='mb-1'>Location: </label>
                                        <input type='text' id='location' placeholder='Your location' className='border-2 border-gray-400 rounded-md h-10 w-64' />
                                   </div>

                                   <div className='flex flex-col mb-2'>
                                        <label htmlFor='email' className='mb-1'>Email: </label>
                                        <input type='email' id='email' placeholder='Your email' className='border-2 border-gray-400 rounded-md h-10 w-64' />
                                   </div>

                                   <div className='flex flex-col mb-2'>
                                        <label htmlFor='password' className='mb-1'>Password: </label>
                                        <input type='password' id='password' placeholder='Enter password' className='border-2 border-gray-400 rounded-md h-10 w-64' />
                                   </div>

                                   <div className='flex flex-col mb-2'>
                                        <label htmlFor='otp' className='mb-1'>OTP: </label>
                                        <input type='text' id='otp' placeholder='Enter otp' disabled={otpBoxDisable} className='border-2 border-gray-400 rounded-md h-10 w-64' />
                                   </div>

                                   <div className='flex gap-2 items-center mt-5'>
                                        <button type='button' className='text-xl font-RobotoSlab bg-black text-white p-2 rounded-lg'>Get OTP</button>
                                        <button type='button' className='text-xl font-RobotoSlab bg-black text-white p-2 rounded-lg' onClick={() => setPhoneNumberVerified(true)}>Accelerate</button>
                                   </div>
                              </div>
                         </div>

                         {/* CarImage */}
                         <div>
                              <img src={carimg} height={200} className={`${phoneNumberVerified ? 'mt-14' : 'sm:block'} mt-14 hidden bg-contain h-64 md:block lg:block sm:w-[200px] sm:h-[300px] md:h-96 md:w-[250px] lg:h-96 lg:w-[270px] rounded-md`} />
                         </div>
                    </div>
               </div>
          </>
     )
}

export default SignUp