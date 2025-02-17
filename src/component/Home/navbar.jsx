import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImgLogo from '@/image/png/LOGO.png'


const navbar = () => {

  return (
    <div className='bg-white p-4 flex justify-between items-center w-screen'>
      <div className='flex justify-center items-center h-full'>
          <Image src={ImgLogo} width={100}  height={100} alt='Image Logo'/>
          <span className='text-black'>Split It</span>
          
      </div>
    </div>
  )
}

export default navbar