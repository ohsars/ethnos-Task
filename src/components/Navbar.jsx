import React from 'react'
import { Link } from 'react-router-dom';
import { Greeting } from './Greeting';

export const Navbar = () => {
  
  const links = ['users', 'posts', 'todos', 'albums', 'settings']
  return (
    <nav>
      <div className=' md:mt-2 sticky top-0'>
        <div className='flex justify-between'>
          <Greeting />
          <nav>
            <ul className='flex md:hidden gap-1' >
            {links.map((link, index) => (
              <li key={index} className='capitalize hover:font-bold p-3 '><Link to={`/${link}`}>{link}</Link></li>
            ))}
            </ul>
        </nav>
        </div>
      </div>
      {/* <Users /> */}
    </nav>
  )
}
