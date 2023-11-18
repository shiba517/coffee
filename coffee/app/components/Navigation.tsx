"use client"

import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className='bg-gray-900 text-slate-200 p-4 text-left [&>*]:mx-1'>
      <Link href={"/"}>Home</Link>
      <Link href="http://localhost:3333/" target='_blank'>Admin</Link>
      <Link href="/blogs" target='_blank'>Blogs</Link>
    </nav>
  );
}

export default Navigation;
