import {React, useState} from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  const [openNav, setOpenNav] = useState(true)
  const links = ['users', 'posts', 'todos', 'albums', 'settings']

  return (
    <div className='hidden md:block'>
      <div className="transition-transform transform-gpu  duration-500 bg-gray-200 h-[100vh] sticky left-0 top-0 border-r-2 p-5">
        <p className={`${openNav ? 'text-5xl' : 'text-center text-7xl'} p-2 mb-6`}>🧑🏾‍💻</p>
        <nav className=''>
          <ul className='gap-6 grid cursor-pointer my-8'>
          {links.map((link, index) => (
            <li key={index} className='capitalize hover:font-bold p-3'>{link}</li>
          ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
