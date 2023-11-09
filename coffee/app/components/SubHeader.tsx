import React from 'react';
import { SubHeaderProps } from '../lib/interface';

const SubHeader = (props: SubHeaderProps) => {
  return (
    <div className=' pt-10 pb-4'>
        <h2 className='font-bold text-3xl'>{props.title}</h2>
        <p className='text-xs pt-2'>{props.subtitle}</p>
    </div>
  );
}

export default SubHeader;
