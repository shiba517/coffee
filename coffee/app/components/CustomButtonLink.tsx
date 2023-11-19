"use client"

import Link from 'next/link';
import { CustomButtonProps } from '../lib/interface';

const CustomButtonLink = (props: CustomButtonProps) => {
  return (
    <Link 
    href={(props.href) ? props.href : 'https://www.youtube.com/'}
    className={`${props.customCss} rounded-full py-2 px-4 mx-1`}
    >
      <span>{props.title}</span>
    </Link>
  );
}

export default CustomButtonLink