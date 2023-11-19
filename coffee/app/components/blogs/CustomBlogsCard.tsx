import Image from 'next/image';
import React from 'react';
import CustomButton from '../CustomButton';
import { CustomBlogsCardProps } from '@/app/lib/interface';
import Link from 'next/link';
import CustomButtonLink from '../CustomButtonLink';

const CustomBlogsCard = (props: CustomBlogsCardProps) => {
  return (
    <div className=' bg-slate-900'>
        <Image 
        src='/test_image.jpg'
        alt='blog'
        width={0} 
        height={0}
        sizes="100%"
        style={{ width: '100%', height: 'auto' }}
        ></Image>
      <div className='p-2'>
        <h3 className='font-semibold text-lg text-yellow-400 pb-4'>{props.title}</h3>
        <p className='line-clamp-4 text-sm text-slate-200'>{props.overview}</p>
      </div>
      <div className='py-2 pb-6'>
        <CustomButtonLink title='read' href={`blogs/${props._id}`} customCss='bg-red-500'></CustomButtonLink>
      </div>
    </div>
  );
}

export default CustomBlogsCard;
