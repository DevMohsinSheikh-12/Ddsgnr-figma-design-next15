import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (


<>
  
       <div className='hidden md:flex justify-between  px-20 py-4 '>


        <div className='flex items-center  text-sm'>
       <p className='pr-2  '> Phone Number: 956 742 455 678</p>
       <p className='border-l-2 border-gray-200 pl-2'> Email:info@ddsgnr.com</p>
        </div>

        <div className="flex items-center justify-end gap-x-5">
                <div><FaFacebookF /></div>
                <div><FaInstagram /></div>
                <div><FaTwitter /></div>
                <div><FaLinkedin /></div>
            </div>


      </div>
   


 
                   {/* Navbar */}


    <nav className='flex justify-between px-6 lg:justify-evenly py-2  border-y-2 border-slate-300 bg-slate-100'>
      
      <div className="logo flex items-center">
      <Image src={'/images/Ddsgnrlogo.svg'} height={40 }
width={130} alt=' logo'/>
      </div>
      
      
      <div>  

        <div className="flex items-center pt-2 justify-evenly lg:hidden">
        <GiHamburgerMenu />
        </div>
      <ul className='hidden  lg:flex lg:items-center lg:space-x-10'>
             <li className=''>Home</li>
             <li className=''>Courses</li>
             <li className=''>Services</li>
             <li className=''>Achievements</li>
             <li  className=''>About Us</li>
             <li  className=''>Testimonials</li>

  {/* Auth-buttons */}

         <div className=' space-x-3'>
             <button className='w-20 h-10 border-[2px] rounded [5px] px-5 py-2 gap-2 hover:bg-black hover:text-white text-base text-black'>Login
             </button>
              <button className='px-5 py-2 rounded-sm gap-2 bg-black hover:bg-slate-500 hover:text-black text-white'>SignUp
            </button>
            </div>

         </ul>
            </div>
    </nav>
  

  </>
  )
}

export default Header