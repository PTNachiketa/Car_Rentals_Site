import React, { useEffect, useRef, useState } from 'react'
import { cars } from '../Exports/Car_Images'
import { BsChevronCompactLeft } from 'react-icons/bs'
import { BsChevronCompactRight } from  'react-icons/bs'

const Car_slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? cars.length - 1 : currentIndex - 1)
  }

  const afterSlide = () => {
    const isLastSlide = currentIndex === cars.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1)
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
    () =>
    setCurrentIndex((prevIndex) =>
    prevIndex === cars.length - 1 ? 0 : prevIndex + 1),
    2300);

    return () => {
      resetTimeout();
    };
  }, [currentIndex])

  return (
    <div className='relative transition ease-linear'>
      <img src={cars[currentIndex].img} className='lg:h-[40rem] md:h-[32rem] w-full'/>
      <div className='absolute left-3 top-[47%] cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} className='text-4xl md:text-5xl lg:text-6xl text-gray-500'/>
      </div>
      <div className='absolute right-3 top-[47%] cursor-pointer'>
        <BsChevronCompactRight onClick={afterSlide} className='text-4xl md:text-5xl lg:text-6xl text-gray-500'/>
      </div>
    </div>
  )
}

export default Car_slider