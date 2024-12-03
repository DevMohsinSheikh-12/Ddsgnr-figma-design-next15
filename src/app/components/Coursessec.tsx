import Image from 'next/image'
import React from 'react'

function Coursessec() {
  return (
      <div className=''>

      {/* heading */}
      <div className=" mt-20 space-y-4 ">
          <h1 className='text-center text-3xl font-bold font-sans text-wrap px-24'>Explore Courses By Category</h1>
          <h1 className='text-center text-sm tfont-sans text-wrap px-7'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h1>
      </div>
      
      {/* cards */}
      <div className="grid grid-cols-1 gap-y-8 place-items-center justify-center my-8 lg:grid-cols-3  ">
 
  {/* card1 */}
        <div className="card1 flex items-center gap-2 w-80 px-2 py-2 bg-gray-100 rounded-lg blocks">

            <div>
            <Image src={"/images/co-1.svg"} alt='img' width={80} height={80} />
            </div>

            <div className='px-4'>
     <h1 className='font-bold '>Design & Development</h1>
     <h1>50+ Courses Available</h1>
            </div>

        </div>
  {/* card  2*/}
        <div className="card2 flex items-center gap-2 w-80 px-2 py-2 bg-gray-100 rounded-lg blocks">

            <div>
            <Image src={"/images/co-2.svg"} alt='img' width={80} height={80} />
            </div>

            <div className='px-4'>
     <h1 className='font-bold '>Design & Development</h1>
     <h1>50+ Courses Available</h1>
            </div>
            
        </div>
  {/* card3 */}
        <div className="card3 flex items-center gap-2 w-80 px-2 py-2 bg-gray-100 rounded-lg blocks">

<div>
<Image src={"/images/co-3.svg"} alt='img' width={80} height={80} />
</div>

<div className='px-4'>
<h1 className='font-bold '>Design & Development</h1>
<h1>50+ Courses Available</h1>
</div>

</div>
      </div>


      {/* 6 cards */}

        {/* cards */}

        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-y-8 place-items-center">
 
       <div className="card4 flex items-center gap-2 w-80 px-2 py-2 bg-gray-100 rounded-lg blocks">

           <div>
           <Image src={"/images/co-4.svg"} alt='img' width={80} height={80} />
           </div>

           <div className='px-4'>
    <h1 className='font-bold '>Design & Development</h1>
    <h1>50+ Courses Available</h1>
           </div>
       </div>
 {/* card  2*/}
       <div className="card5 flex items-center gap-2 w-80 px-2 py-2 bg-gray-100 rounded-lg blocks">

           <div>
           <Image src={"/images/co-5.svg"} alt='img' width={80} height={80} />
           </div>

           <div className='px-4'>
    <h1 className='font-bold '>Design & Development</h1>
    <h1>50+ Courses Available</h1>
           </div>
           
       </div>
 {/* card3 */}
       <div className="card6 flex items-center gap-2 w-80 px-2 py-2 bg-gray-100 rounded-lg blocks">

<div>
<Image src={"/images/co-6.svg"} alt='img' width={80} height={80} />
</div>

<div className='px-4'>
<h1 className='font-bold '>Design & Development</h1>
<h1>50+ Courses Available</h1>
</div>

</div>

<div className="card7 flex items-center gap-2 w-80 px-2 py-2 bg-gray-100 rounded-lg blocks">

<div>
<Image src={"/images/co-7.svg"} alt='img' width={80} height={80} />
</div>

<div className='px-4'>
<h1 className='font-bold '>Design & Development</h1>
<h1>50+ Courses Available</h1>
</div>

</div>

<div className="card8 flex items-center gap-2 w-80 px-2 py-2 bg-gray-100 rounded-lg blocks">

<div>
<Image src={"/images/co-8.svg"} alt='img' width={80} height={80} />
</div>

<div className='px-4'>
<h1 className='font-bold '>Design & Development</h1>
<h1>50+ Courses Available</h1>
</div>

</div>

<div className="card9 flex items-center gap-2 w-80 px-2 py-2 bg-gray-100 rounded-lg blocks">
<div>
<Image src={"/images/co-9.svg"} alt='img' width={80} height={80} />
</div>

<div className='px-4'>
<h1 className='font-bold '>Design & Development</h1>
<h1>50+ Courses Available</h1>
</div>

</div>
     </div>
     <div className="viewcoursebtn flex flex-row items-center justify-center mt-10">
        <button className=' border border-black rounded-lg bg-white text-black px-3 py-3 '>
             View All Courses</button>
     </div>
     </div>
  )
}

export default Coursessec