import React from 'react'
import { Greeting } from './Greeting';

export const Navbar = () => {
  return (
    <nav>
      <div className=' md:mt-2 sticky top-0'>
        <div className='flex'>
          <Greeting />
        </div>
      </div>
      {/* <Users /> */}
    </nav>
  )
}
