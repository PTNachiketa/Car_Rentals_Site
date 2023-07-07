import React, { useState } from 'react'
import Header from '../Components/Header'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import carimg from '../Assets/Login_car_image.jpg'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {

     const [otpBoxDisable, setOtpBoxDisable] = useState(true)
     const [phoneNumberVerified, setPhoneNumberVerified] = useState(false);

  return (
    <>
       <Header/>
     <div className='flex lg:items-center lg:justify-center lg:mr-40'>
       <div className='mt-40 flex h-96 gap-4'>

          {/* PhoneNumber */}
          <div className={`${phoneNumberVerified ? 'hidden' : 'block'} flex flex-col sm:ml-28 lg:ml-40`}>
               <h1 className='text-xl font-YsabeauInfant ml-0 mb-8 sm:text-2xl md:text-3xl'>Welcome to CarRentals</h1>

               <div className='flex flex-col mb-9'>
                    <label className='text-md mb-2'>Phone Number</label>
                    <PhoneInput
                         country="in"
                         onlyCountries={['in']}  
                    />
               </div>

               <div>
                    <input type='text' placeholder='Enter OTP' disabled={otpBoxDisable} className='border-2 border-gray-200 rounded-md w-[300px] h-[40px] mb-9 text-start' />
               </div>

               <div className='flex items-center'>
                    <button type='button' className='text-xl font-YsabeauInfant bg-black text-white p-2 rounded-lg' onClick={() => setPhoneNumberVerified(true)}>Accelerate</button>
               </div>
          </div>


          {/* Email */}
          <div className={`${phoneNumberVerified ? 'block' : 'hidden'} flex flex-col sm:ml-28 lg:ml-40`}>
               <h1 className='text-xl font-YsabeauInfant ml-0 mb-6 sm:text-2xl md:text-3xl'>Welcome to CarRentals</h1>

               <div className='flex border-2 border-gray-200 rounded-md p-3 items-center gap-3 cursor-pointer hover:bg-black hover:text-white mb-1'>
                    <FcGoogle className='text-2xl'/>
                    <p className='text-lg'>Continue with Google</p>
               </div>

               <div className='flex items-center justify-center mb-1'>or</div>

               <div className='flex flex-col mb-9'>
                    <label htmlFor='email' className='text-md mb-2'>Email</label>
                    <input type='email' id='email' placeholder='Your email' className='border-2  border-gray-200 rounded-md w-[300px] h-[40px]'/>
               </div>

               <div>
                    <input type='text' placeholder='Enter OTP' disabled={otpBoxDisable} className='border-2 border-gray-200 rounded-md w-[300px] h-[40px] mb-9 text-start' />
               </div>

               <div className='flex items-center'>
                    <button type='button' className='text-xl font-YsabeauInfant bg-black text-white p-2 rounded-lg'>Accelerate</button>
               </div>
          </div>

           
          {/* CarImage */}
          <div>
               <img src={carimg} height={200} className='bg-contain h-64 sm:w-[200px] md:w-[250px] sm:h-[300px] md:h-96 lg:w-[330px] rounded-md'/>
          </div>
       </div>
     </div>
    </>
  )
}

export default SignUp