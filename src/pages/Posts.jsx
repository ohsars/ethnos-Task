import React, { useState, useEffect } from 'react';
import { getPosts } from '../utils/api';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(9)

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className='mx-8 mt-4 md:h-[90vh] relative'>
      

      <div className='flex justify-between '>
        <h1 className='text-3xl font-bold uppercase mb-5'>Posts</h1>
        <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search posts 🔍"
        className='p-2 border-b-2 rounded mb-2 w-2/6 outline-none'
      />

      </div>
      <ul className=' my-3 w-full  md:w-[85svw] grid md:grid-cols-3 gap-3'>
        {currentPosts.map((post) => (
          <li key={post.id} className='bg-blue-200 p-2 rounded hover:bg-blue-300 grid cursor-pointer'>
            <h2 className='font-extrabold uppercase'>Title: {post.title}</h2>
            <p className='my-2 opacity-80'>{post.body}</p>
            <p className='font-bold text-sm italic '>Author: {post.userId}</p>
          </li>
        ))}
      </ul>
      
      
      <div className='gap-5 bottom-2 fixed w-[100%] md:flex justify-center left-0 text-center mt-5 md:mt-1 '>
        {Array.from(Array(totalPages).keys()).map((pageNumber) => (
          <button key={pageNumber} onClick={() => paginate(pageNumber + 1)} className={`${totalPages.length <= -1 & 'bg-red-200' } px-2 rounded cursor-pointer text-gray-700 md:text-2xl`} >◉</button>
        ))}
      </div>
    </div>
  );
};

export default Posts;