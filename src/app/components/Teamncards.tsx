import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa'
import { CiBasketball } from "react-icons/ci";

function Teamncards() {
 
  return (
    <section className='bg-white text-black' >
        <div className=''>
  <h1 className='text-6xl font-bold text-black text-center flex items-center justify-center mb-8 pt-28'>Our Team</h1>
  <h1 className=' text-xl font-serif text-black text-center flex items-center justify-center mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  </h1>
  
        </div>
        <div className='flex flex-col justify-center items-center space-y-4  text-black   lg:grid grid-cols-3 lg:justify-items-center' >

    <div className='bg-cardpurple h-128 w-72 text-center  rounded-lg  hover:border bg-gray-100 py-3'> 
     <div className='flex items-center justify-center p-5'>

      <Image src ={"/images/teammem-1.svg"}
      height={80}
      width={80}
      alt={"img"} />
      </div>
      
      <h1 className='text-xl font-bold '>James Nduku</h1> <p className=''>Marketing Coordinator</p>
            <Link href={"/"} >
            <div className="flex items-center justify-center gap-x-4  mt-4 mb-3">

            <FaLinkedin />
           <CiBasketball />
            <FaTwitter />

            </div>
      </Link>
    </div>
    <div className='bg-cardpurple h-128 w-72  rounded-lg  hover:border bg-gray-100 text-center py-3'>
      <div className='flex items-center justify-center p-5'>
      <Image src ={"/images/teammem-2.svg"}
      height={80}
      width={80}
      alt={"img"} />
      </div> 
     
      <h1 className='text-xl font-bold '>Joseph Munyambu</h1> <p className=''>Nursing Assistant</p>
            <Link href={"/"} >
            <div className="flex items-center justify-center gap-x-4  mt-4 mb-3">

            <FaLinkedin />
           <CiBasketball />
            <FaTwitter />
            </div>
      </Link>
    </div>
    <div className='bg-cardpurple h-128 w-72   rounded-lg  hover:border bg-gray-100 text-center py-3'> 
      <div className="flex items-center justify-center ">

<div className='flex items-center justify-center p-5'>
      <Image src ={"/images/teammem-3.svg"}
      height={80}
      width={80}
      alt={"img"} />
      </div>
      </div>
     
      <h1 className='text-xl font-bold  '>Joseph Ngumbau</h1> <p className=''>Medical Assistant</p>
            <Link href={"/"} >
            <div className="flex items-center justify-center gap-x-4  mt-4 mb-3">

            <FaLinkedin />
           <CiBasketball />
            <FaTwitter />
            </div>
      </Link>
    </div>

    
    <div className='hidden md:block bg-cardpurple h-128 w-72  rounded-lg  hover:border bg-gray-100 text-center py-3' > 

      <div className="flex items-center justify-center p-5">

      <Image src ={"/images/teammem-4.svg"}
      height={80}
      width={80}
      alt={"img"} />
      </div>
      
      <h1 className='text-xl font-bold  '>Erick Kipkemboi</h1> <p className=''>Web Designer</p>
            <Link href={"/"} >
            <div className="flex items-center justify-center gap-x-4  mt-4 mb-3">

            <FaLinkedin />
           <CiBasketball />
            <FaTwitter />
            </div>
      </Link>
    </div>
    <div className='hidden md:block bg-cardpurple h-128 w-72  rounded-lg  hover:border bg-gray-100 text-center py-3'> 
      <div className='flex items-center justify-center p-5'>

      <Image src ={"/images/teammem-5.svg"}
      height={80}
      width={80}
      alt={"img"} />
      </div>
   
      <h1 className='text-xl font-bold  '>Stephen Kerubo</h1> <p className=''>President of Sales</p>
            <Link href={"/"} >
            <div className="flex items-center justify-center gap-x-4 mt-4 mb-3">

            <FaLinkedin />
           <CiBasketball />
            <FaTwitter />
            </div>
      </Link>
    </div>
    <div className='hidden md:block bg-cardpurple h-128 w-72  rounded-lg  hover:border bg-gray-100 text-center py-3'> 
      <div className="flex items-center justify-center p-5">

      <Image src ={"/images/teammem-6.svg"}
      height={80}
      width={80}
      alt={"img"} />
      </div>
     
      <h1 className='text-xl font-bold  '>John Leboo</h1> <p className=''>Cat  Trainer</p>
            <Link href={"/"} >
            <div className="flex items-center justify-center gap-x-4  mt-4 mb-3">

            <FaLinkedin />
           <CiBasketball />
            <FaTwitter />
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

export default Teamncards