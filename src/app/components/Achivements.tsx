import React from 'react'

function Achivements() {
  return (
    <div className=''>
 
{/* heading */}
    <div className=" mt-24 space-y-4 ">
          <h1 className='text-center text-3xl lg:text-5xl font-bold font-sans text-wrap px-24 1'>Our Achivements</h1>
          <h1 className='text-center text-sm font-sans text-wrap px-40 lg:text-xl pt-11'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</h1>
      </div>

      {/* numbers */}

<div className="lg:flex lg:items-center lg:justify-center gap-x-40 mt-20 pb-20">

      <div className="flex items-center justify-center space-x-40">

        <div className="">
          <h1 className=" font-bold text-black text-3xl">+200</h1>
          <h1 className="font-sans text-black">Courses</h1>
        </div>

        <div className="">
        <h1 className=" font-bold text-black text-3xl">50K</h1>
        <h1 className="font-sans text-black">Mentors</h1>
        </div>

      </div>

      <div className="flex items-center justify-center space-x-40">

        <div className="">
        <h1 className=" font-bold text-black text-3xl">370K</h1>
        <h1 className="font-sans text-black">Students</h1>
        </div>

        <div className="">
        <h1 className=" font-bold text-black text-3xl">+100</h1>
        <h1 className="font-sans text-black">Recognitions</h1>
        </div>

      </div>

    </div>
  </div>
  )
}

export default Achivements