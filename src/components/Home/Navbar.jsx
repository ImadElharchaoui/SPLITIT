import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImgLogo from '@/image/png/LOGO.png';

const Navbar = () => {
  return (
    <div className='bg-background border-b-2 border-secondary py-4 px-10 flex justify-between items-between w-full'>
      <Link href={"/"}>
        <div className='flex justify-center items-center h-full'>
          <Image src={ImgLogo} width={60} height={60} alt='Image Logo' />
          <span className='text-accent text-3xl font-bold font-Edu ml-2 '>Split It</span>
        </div>
      </Link>

      <div className='mr-40 flex justify-between items-center font-bold text-large space-x-4'>
          <Link href={""}>About Us</Link>
          <Link href={""}>Later</Link>
          <Link href={""}>Later</Link>
          <Link href={""}>Later</Link>
          <Link href={""}>Later</Link>
      </div>
    </div>
  );
};

export default Navbar;