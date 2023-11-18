import React from 'react';
import { PageHeaderProps } from '../lib/interface';

const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className='px-4'>
      <div className='pt-12 pb-6 px-4 text-left border-b-4 border-red-500'>
        <h1 className='uppercase text-3xl font-semibold'>{props.title}</h1>
      </div>
    </div>
  );
}

export default PageHeader;
