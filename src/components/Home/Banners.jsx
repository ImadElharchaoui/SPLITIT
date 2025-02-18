import React from 'react'
import Image from 'next/image'
import ImgBanner1 from '@/image/wallpaper/banners/banner1.png'
import ImgBanner2 from '@/image/wallpaper/banners/banner2.jpg'
import ImgBanner3 from '@/image/wallpaper/banners/banner3.jpg'
import Link from 'next/link'

const Banners = () => {
  return (
    <div className='w-full space-y-20'>
        <div className='flex justify-center items-center w-full py-40 font-serif space-x-16 px-40'>
            <div className='text-large'>
                <h3 className='text-5xl font-bold text-primary'>Less stress when sharing expenses with housemates.</h3>
                <p className='text-xl'>Keep track of your shared expenses and balances <br/> with housemates, trips, groups, friends, and family.</p>
                <div className='w-full flex justify-center mt-2'><Link className="py-2 px-5 bg-primary rounded-xl" href={"/login"}>Join Us</Link></div>
            </div>
            <Image src={ImgBanner1} alt='Banner 1' height={640} width={480}/>
        </div>

        <div className='flex justify-center items-center w-full py-40 font-serif px-40 bg-[#8CBBCB] space-x-16 border-t-2 border-b-2 border-primary'>
            <Image src={ImgBanner2} alt='Banner 2' height={640} width={480}/>
            <div className='text-large'>
                <h3 className='text-5xl font-bold text-accent'>Less stress when sharing expenses with housemates.</h3>
                <p className='text-xl text-white'>Keep track of your shared expenses and balances <br/> with housemates, trips, groups, friends, and family.</p>
                <div className='w-full flex justify-center mt-2'><Link className="py-2 px-5 bg-primary rounded-xl" href={"/login"}>Join Us</Link></div>
            </div>
            
        </div>

        <div className='flex justify-center items-center w-full py-40 font-serif space-x-16 px-40'>
            <div className='text-large'>
                <h3 className='text-5xl font-bold text-primary'>Less stress when sharing expenses with housemates.</h3>
                <p className='text-xl'>Keep track of your shared expenses and balances <br/> with housemates, trips, groups, friends, and family.</p>
                <div className='w-full flex justify-center mt-2'><Link className="py-2 px-5 bg-primary rounded-xl" href={"/login"}>Join Us</Link></div>
            </div>
            <Image src={ImgBanner3} alt='Banner 3' height={640} width={480}/>
        </div>
    </div>
  )
}

export default Banners