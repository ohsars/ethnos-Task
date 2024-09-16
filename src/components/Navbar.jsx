import React from 'react'
import { Link } from 'react-router-dom';
import { Greeting } from './Greeting';

export const Navbar = () => {
  
  const links = ['users', 'posts', 'todos', 'albums', 'settings']
  return (
    <nav className='mb-4 mx-auto'>
      <div className=' md:mt-2 sticky top-0'>
        <div className=''>
          <Greeting />
          <nav className='bg-orange-100'>
            <ul className='md:hidden grid grid-cols-5 -px-1' >
            {links.map((link, index) => (
              <li key={index} className='capitalize text-sm hover:font-bold p-2 '><Link to={`/${link}`}>{link}</Link></li>
            ))}
            </ul>
        </nav>
        </div>
      </div>
      {/* <Users /> */}
    </nav>
  )
}
