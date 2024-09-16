import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Navbar } from '../components/Navbar'
import Users from './Users'
import Todos from './Todos'
import Posts from './Posts'
import Albums from './Albums'

export const Dashboard = () => {
  return (
    <>
      <div className='flex h-full'>
        <Sidebar />
        <div className=''>
          <Navbar />
          <Users />
          {/* <Todos />
          <Posts />
          <Albums /> */}
        </div>
        
      </div>
    </>
  )
}
