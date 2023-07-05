import React from 'react'
import { cars } from '../Exports/Car_Images'

const Car_slider = () => {
  return (
    <>
       {/* <div style={{backgroundImage: `url('../Assets/Car_img1.jpg')`}} className='w-full h-96'></div> */}
       <img src={cars[2].img}/>
    </>
  )
}

export default Car_slider