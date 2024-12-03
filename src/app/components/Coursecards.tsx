import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



function Coursecards() {
 
  return (
    <section className='bg-white text-black' >
        <div className=''>
  <h1 className='text-6xl font-bold text-black text-center flex items-center justify-center mb-8 pt-28'>Courses</h1>
  <h1 className=' text-xl font-serif text-black text-center flex items-center justify-center mb-16'>Your Ultimate Guide to learning
  </h1>
  <div className="cbtn flex items-center justify-center gap-x-10 pb-8">
    <button className=' border-b-2 border-black'>Popular</button>
    <button>Recommended</button>
    <button>Best Prices</button>
  </div>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4  text-black   lg:grid grid-cols-3 lg:justify-items-center' >

    <div className='bg-cardpurple h-128 w-72  rounded-lg  hover:border bg-gray-100 '> 
      <Image src ={"/images/card-1.svg"}
      height={300}
      width={300}
      alt={"img"} />
      <div className='flex items-center justify-between px-6 py-4'>
        <p>Design</p>
        <p>⭐ 5.0</p>
      </div>
      <h1 className='text-xl font-bold  ml-6'>UX/UI Design 201</h1> <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <Link href={"/"} >
            <div className="flex items-center justify-start ml-6 mt-4 mb-2">

      <button className='bg-buttoncolor px-3 py-1 border border-black  rounded-sm   hover:px-4 transition-all hover:text-cardpurple  '>Read More</button>
      <p className='ml-5'>$400</p>
            </div>
      </Link>
    </div>
    <div className='bg-cardpurple h-128 w-72  rounded-lg  hover:border bg-gray-100 '> 
      <Image src ={"/images/card-2.svg"}
      height={300}
      width={300}
      alt={"img"} />
      <div className='flex items-center justify-between px-6 py-4'>
        <p>Programming</p>
        <p>⭐ 5.0</p>
      </div>
      <h1 className='text-xl font-bold  ml-6'>Introduction to Python</h1> <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <Link href={"/"} >
            <div className="flex items-center justify-start ml-6 mt-4 mb-2">

      <button className='bg-buttoncolor px-3 py-1 border border-black  rounded-sm   hover:px-4 transition-all hover:text-cardpurple  '>Read More</button>
      <p className='ml-5'>$400</p>
            </div>
      </Link>
    </div>
    <div className='bg-cardpurple h-128 w-72   rounded-lg  hover:border bg-gray-100 '> 
      <Image src ={"/images/card-3.svg"}
      height={300}
      width={300}
      alt={"img"} />
      <div className='flex items-center justify-between px-6 py-4'>
        <p>Business</p>
        <p>⭐ 5.0</p>
      </div>
      <h1 className='text-xl font-bold  ml-6'>Data Analysis for Beginners</h1> <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <Link href={"/"} >
            <div className="flex items-center justify-start ml-6 mt-4 mb-2">

      <button className='bg-buttoncolor px-3 py-1 border border-black  rounded-sm   hover:px-4 transition-all hover:text-cardpurple  '>Read More</button>
      <p className='ml-5'>$400</p>
            </div>
      </Link>
    </div>

    
    <div className='hidden md:block bg-cardpurple h-128 w-72  rounded-lg  hover:border bg-gray-100 '> 
      <Image src ={"/images/card-4.svg"}
      height={300}
      width={300}
      alt={"img"} />
      <div className='flex items-center justify-between px-6 py-4'>
        <p>Art</p>
        <p>⭐ 5.0</p>
      </div>
      <h1 className='text-xl font-bold  ml-6'>Art Specialization</h1> <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <Link href={"/"} >
            <div className="flex items-center justify-start ml-6 mt-4 mb-2">

      <button className='bg-buttoncolor px-3 py-1 border border-black  rounded-sm   hover:px-4 transition-all hover:text-cardpurple  '>Read More</button>
      <p className='ml-5'>$400</p>
            </div>
      </Link>
    </div>
    <div className='hidden md:block bg-cardpurple h-128 w-72  rounded-lg  hover:border bg-gray-100 '> 
      <Image src ={"/images/card-5.svg"}
      height={300}
      width={300}
      alt={"img"} />
      <div className='flex items-center justify-between px-6 py-4'>
        <p>Law</p>
        <p>⭐ 5.0</p>
      </div>
      <h1 className='text-xl font-bold  ml-6'>Rule of Law</h1> <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <Link href={"/"} >
            <div className="flex items-center justify-start ml-6 mt-4 mb-2">

      <button className='bg-buttoncolor px-3 py-1 border border-black  rounded-sm   hover:px-4 transition-all hover:text-cardpurple  '>Read More</button>
      <p className='ml-5'>$400</p>
            </div>
      </Link>
    </div>
    <div className='hidden md:block bg-cardpurple h-128 w-72  rounded-lg  hover:border bg-gray-100 '> 
      <Image src ={"/images/card-6.svg"}
      height={300}
      width={300}
      alt={"img"} />
      <div className='flex items-center justify-between px-6 py-4'>
        <p>Tech</p>
        <p>⭐ 5.0</p>
      </div>
      <h1 className='text-xl font-bold  ml-6'>Introduction to webflow</h1> <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <Link href={"/"} >
            <div className="flex items-center justify-start ml-6 mt-4 mb-2">

      <button className='bg-buttoncolor px-3 py-1 border border-black  rounded-sm   hover:px-4 transition-all hover:text-cardpurple  '>Read More</button>
      <p className='ml-5'>$400</p>
            </div>
      </Link>
    </div>
      </div>
    <div className="viewcoursebtn flex flex-row items-center justify-center mt-10 mb-10">
        <button className=' border border-black rounded-lg bg-white text-black px-3 py-3 '>
             View All Courses</button>
     </div>
  
      </section>
  )
}

export default Coursecards