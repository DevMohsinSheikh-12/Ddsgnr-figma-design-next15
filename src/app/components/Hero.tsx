import Image from 'next/image'
import React from 'react'
import LogoCarousel from './LogoCarousel'


const Hero = () => {
  return (
    <>
    <div className="allhero flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-evenly ">

       {/* bigtext */}

    <div className='big-text-and-btns text-center '>
          <h1 className=' pt-9 font-bold text-[46px] md:font-bold md:text-[56px]  text-[#000000] '>Learn new skills</h1>
             <h1 className='font-bold text-[46px] md:font-bold md:text-[56px]   text-[#000000] '>online with ease</h1> 
          <p className='w-[500px] h-[54px] text-[18px]  text-black mt-3'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>



      <div className='space-x-3 mt-9 pb-8'>
              <button className='rounded-[5px] border-[1px] py-3 px-6  bg-black  text-white '>Start learning now</button>
              <button className='rounded-[5px] border-[1px] py-3 px-6  bg-white  text-black'>Start learning now</button>
      </div>



          </div>



          {/* image */}
          
          <div className='flex items-center'>
            <Image src={"/images/image.webp"} height={900 } width={640} alt='img'/>
          </div>
    </div>

    <LogoCarousel />
          </>
  )
}

export default Hero