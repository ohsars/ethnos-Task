import React, { useState, useEffect } from 'react';
import { getAlbums } from '../utils/api';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums().then((response) => {
      setAlbums(response.data);
    });
  }, []);

  return (
    <div className='flex gap-2 justify-around '>
      <Sidebar />
      <div className='mx-8 md:flex-1'>
        <Navbar />
        <div>
          <h1 className='text-3xl font-bold uppercase mb-5'>Albums</h1>
        <ul className=' my-3 w-full md:w-[85svw] md:grid grid-cols-4 gap-4'>
          {albums.map((album) => (
            <li key={album.id} className='border p-2 rounded grid hover:bg-gray-200 transition-transform transform-gpu  duration-500 ease-in-out'>
              <h2><span className='font-bold'>Title:</span> {album.title}</h2>
              <p className=''>User ID: {album.userId}</p>
            </li>
          ))}
        </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Albums;