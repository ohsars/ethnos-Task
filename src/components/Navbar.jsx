import React from 'react'
import { Greeting } from './Greeting';

export const Navbar = () => {
  return (
    <nav classname="static z-[50] transform-cpu ease-in transition-transform">
      <div className='max-w-[100vw] mx-8 md:mt-2 sticky top-0'>
        <div className='flex'>
          <Greeting />
        </div>
      </div>
      {/* <Users /> */}
    </nav>
  )
}
