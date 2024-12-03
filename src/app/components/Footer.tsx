import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function footer(){


    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-16 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-10">

            <div className="lg:flex lg:flex-row lg:items-center lg:gap-x-32  mb-16">

                <div>
                <p className='font-semibold text-center lg:text-left'>Subscribe to our newsletter</p>
                <p className='px-12 lg:p-0 text-center lg:text-left pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-3">

                    <div className='flex justify-center  '>
                    <input type="text" placeholder='Enter your Email' className='border rounded-lg border-black px-16 py-4 text-start lg:py-3 lg:px-8 ' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='mt-8 lg:mt-16 space-y-3'>

                    <button className='flex  border rounded-lg border-black px-36 py-4 font-semibold text-center lg:px-6 lg:py-3'>Subscribe</button>
                    <div className="text-center">
                        <p>By subscribing you agree to with our <span className='border-b-2 border-black'> Privacy Policy</span></p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>


            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <div className="flex items-center gap-x-3 lg:flex lg:flex-col lg:items-start lg:justify-start justify-center md:max-w-[200px]">

                   

                    <p className="text-muted-foreground mt-4 text-sm text-start">
                       <Image src={'/images/Ddsgnrlogo.svg'} height={40 }
width={130} alt=' logo' />                    </p>
                    <span className="mt-4 text-black-200 text-sm flex items-center ">
                        Made in Pakistan with
                        <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
                    </span>
                </div>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="">
                            <h3 className="text-base font-medium ">
                               Courses
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Business
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Development
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Technology
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                       Designs
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                       Designs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-base font-medium ">
                               Social
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                      
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Instagram
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Twitter
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        LinkedIn
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="">
                            <h3 className="text-base font-medium ">
                                Resources
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                      Career
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                      Resume
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Learning
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                       Interview Preparations
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                       Jobs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-base font-medium ">
                                About Us
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                    FAQs
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                    Help/Support
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Contact
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Partners
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 lg:pt-8 f lg:flex md:items-center md:justify-between md:gap-x-7 w-full">
                <p className="text-sm text-muted-foreground mt-8 md:mt-0 text-center pb-4">
                    &copy; {new Date().getFullYear()} Ddsgnr. All right reserved.
                </p>

                <div className='flex items-center gap-x-7 text-sm'>
                <div className=" border-b-2 border-black">Privacy Policy</div>
                <div className="border-b-2 border-black">Terms of Service</div>
                <div className="border-b-2 border-black">Cookies Settings</div>
                </div>
                
            <div className="flex items-center justify-center lg:justify-end gap-x-5 pt-9">
                <div><FaFacebookF /></div>
                <div><FaInstagram /></div>
                <div><FaTwitter /></div>
                <div><FaLinkedin /></div>
            </div>
            </div>


        </footer>
    )
}

export default footer