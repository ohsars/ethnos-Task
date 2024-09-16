import React, { useState, useEffect } from 'react';
import { getUsers } from '../utils/api';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='flex gap-2 justify-between '>
    <Sidebar />
    <div className='mx-8 md:flex-1'>
    <Navbar />
      <h2 className='text-3xl font-bold uppercase mb-5'>Users</h2>
        <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users"
        className=' mb-4 md:w-2/6 p-2 border-b-2 rounded  outline-none '
      />
      <table className=' bg-gray-100 shadow-lg rounded leading-5 text-left w-min md:w-[90%] overflow-hidden'>
        <thead className=''>
          <tr>
            {/* <th className='p-2'>S/N</th> */}
            <th className='py-2 px-4'>Name</th>
            <th className='py-2 px-4'>Email</th>
            <th className='py-2 px-4 hidden md:table-cell'>Address</th>
            <th className='py-2 px-4 hidden md:table-cell '>Company</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              {/* <td className='p-2'>{index}</td> */}
              <td className='py-2 px-4'>{user.name}</td>
              <td className='py-2 px-4'>{user.email}</td>
              <td className='py-2 px-4 hidden md:table-cell'>{user.address.city}</td>
              <td className='py-2 px-4 hidden md:table-cell'>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Users;