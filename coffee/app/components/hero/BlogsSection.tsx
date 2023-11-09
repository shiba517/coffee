import React from 'react';
import SubHeader from '../SubHeader';
import CustomBlogsCard from '../blogs/CustomBlogsCard';
import CustomButton from '../CustomButton';

const BlogsSection = () => {
  return (
    <div className=' bg-slate-200 text-black pb-4'>
      <SubHeader title='Latest news' subtitle='Porro quisquam debitis nemo animi? Voluptates dolore est et quae'></SubHeader>
        <div className='grid grid-cols-2 p-4 gap-4'>
            <CustomBlogsCard></CustomBlogsCard>
            <CustomBlogsCard></CustomBlogsCard>
        </div>
        <div>
            <CustomButton title='read more blogs' customCss='border-4 bg-yellow-400 px-4'></CustomButton>
        </div>
    </div>
  );
}

export default BlogsSection;
