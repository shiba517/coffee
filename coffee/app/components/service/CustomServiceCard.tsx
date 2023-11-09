import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import CustomButton from '../CustomButton';

const CustomServiceCard = () => {
  return (
    <div className='text-center'>
      <div className='mx-auto text-yellow-400 rounded-full py-4 [&>*]:mx-auto'>
        <FontAwesomeIcon icon={faHammer} style={{ height: "3rem" }} />
      </div>
      <div className=''>
        <h3 className=' text-slate-100 font-semibold'>Service 2</h3>
        <p className='text-xs py-2 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus</p>
        <CustomButton title='read more' customCss='border-4 border-yellow-400 px-4'></CustomButton>
      </div>
    </div>
  );
}

export default CustomServiceCard;