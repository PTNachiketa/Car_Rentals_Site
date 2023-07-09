import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import Header from '../Components/Header'
import carimg from '../Assets/Login_car_image.jpg'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [phoneNumberVerified, setPhoneNumberVerified] = useState(false)
    const [otpBoxDisable, setOtpBoxDisable] = useState(true)

    return (
        <>
            <Header />
            <div className='flex justify-center gap-5 mt-24'>
                <div className={`${phoneNumberVerified ? 'hidden' : 'block'} flex flex-col mt-14`}>
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
                        <button type='button' className='text-xl font-YsabeauInfant bg-black text-white p-2 rounded-lg'>Accelerate</button>
                    </div>

                    <p>Don't have an account? <span className='text-lg text-blue-400 underline cursor-pointer' onClick={() => {navigate('/signup')}}>Signup here</span></p>
                </div>

                {/* CarImage */}
                <div>
                    <img src={carimg} height={200} className={`${phoneNumberVerified ? 'mt-14' : 'sm:block'} mt-14 hidden bg-contain h-64 md:block lg:block sm:w-[200px] sm:h-[300px] md:h-72 md:w-[210px] lg:h-80 lg:w-[270px] rounded-md`} />
                </div>
            </div>
        </>
    )
}

export default Login