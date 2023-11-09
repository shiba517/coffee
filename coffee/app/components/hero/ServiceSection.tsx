import React from 'react';
import CustomServiceCard from '../service/CustomServiceCard';

const ServiceSection = () => {
  return (
    <section>
      <div className=' pt-10 pb-4'>
        <h2 className='font-bold text-3xl'>Our Services</h2>
        <p className='text-xs pt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque</p>
      </div>
      <div className='grid grid-cols-2 p-4 gap-4 [&>*]:mb-4'>
        <CustomServiceCard></CustomServiceCard>
        <CustomServiceCard></CustomServiceCard>
        <CustomServiceCard></CustomServiceCard>
        <CustomServiceCard></CustomServiceCard>
      </div>
    </section>
  );
}

export default ServiceSection;
