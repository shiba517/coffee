import React from 'react';
import CustomButton from '../CustomButton';

const HeroSection = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-4 bg-black text-slate-200'>
      <h1 className='text-4xl font-extrabold uppercase text-yellow-500'>Gearhead Garage</h1>
      <p>Rev Up Your Ride, Restore Your Pride</p>
      <div className='py-2'>
        <CustomButton title='Learn more' customCss='bg-red-500'></CustomButton>
        <CustomButton title='Contact' customCss='bg-red-500'></CustomButton>
      </div>
    </div>
  );
}

export default HeroSection;
