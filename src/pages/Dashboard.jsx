import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Greeting } from '../components/Greeting'
import { Navbar } from '../components/Navbar'

export const Dashboard = () => {
  return (
    <div className='flex gap-2 justify-around '>
      <Sidebar />
      <div className='flex-1'>
        <Navbar />
      </div>
      
    </div>
  )
}
