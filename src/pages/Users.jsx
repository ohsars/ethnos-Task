import React, { useState, useEffect } from 'react';
import { getUsers } from '../utils/api';

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
    <div className='m-8 md:w-[90%]'>
    <h2 className='text-3xl font-bold uppercase mb-5'>Users</h2>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users"
        className='p-2 border-b mb-2 w-2/6 '
      />
      <table className=' bg-gray-100 shadow-lg rounded leading-5 text-left w-full'>
        <thead className=''>
          <tr className='p-2'>
            {/* <th className='p-2'>S/N</th> */}
            <th className='p-2'>Name</th>
            <th className='collapse md:visible'>Email</th>
            <th className='collapse md:visible'>Address</th>
            <th className='collapse md:visible'>Company</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              {/* <td className='p-2'>{index}</td> */}
              <td className='p-2'>{user.name}</td>
              <td className='collapse md:visible'>{user.email}</td>
              <td className='collapse md:visible'>{user.address.city}</td>
              <td className='collapse md:visible'>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;