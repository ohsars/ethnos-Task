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
    <div className='m-8 w-fit md:w-[90%]'>
    <h2 className='text-3xl font-bold uppercase mb-5'>Users</h2>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users"
        className='p-2 border-b mb-2 w-2/6 '
      />
      <table className=' table-auto bg-gray-100 shadow-lg rounded leading-5 text-left w-1/12 md:w-full'>
        <thead className=''>
          <tr>
            {/* <th className='p-2'>S/N</th> */}
            <th className='py-2 px-4'>Name</th>
            <th className='py-2 px-4'>Email</th>
            <th className='py-2 px-4 md:table-cell'>Address</th>
            <th className='py-2 px-4 md:table-cell '>Company</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              {/* <td className='p-2'>{index}</td> */}
              <td className='py-2 px-4'>{user.name}</td>
              <td className='py-2 px-4'>{user.email}</td>
              <td className='py-2 px-4 md:table-cell'>{user.address.city}</td>
              <td className='py-2 px-4 md:table-cell'>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;