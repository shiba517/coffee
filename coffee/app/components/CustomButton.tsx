"use client"

import { CustomButtonProps } from '../lib/interface';

const CustomButton = (props: CustomButtonProps) => {
  return (
    <button 
    className={`${props.customCss} rounded-full py-1 px-2 mx-1`}
    disabled={false}
    type={'button'}
    onClick={props.handleClick}
    >
      <span>{props.title}</span>
    </button>
  );
}

export default CustomButton