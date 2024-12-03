import React from 'react'
import Hero from './components/Hero'
import Coursessec from './components/Coursessec'
import Achivements from './components/Achivements'
import Coursecards from './components/Coursecards'
import Teamncards from './components/Teamncards'
import Testimonials from './components/Testimonials'

function page() {
  return (
    <div className='   '>
      
      <Hero  />
      <Coursessec />
      <Achivements />
      <Coursecards />
     <Teamncards />
     <Testimonials />

    </div>
  )
}

export default page