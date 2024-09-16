import React, { useState, useEffect } from 'react';
import { getTodos } from '../utils/api';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    getTodos().then((response) => {
      setTodos(response.data);
    });
  }, []);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (completed) {
      return todo.completed;
    }
    return true;
  });

  return (
    <div className='flex gap-2 justify-around '>
      <Sidebar />
      <div className='mx-8 md:flex-1'>
        <Navbar />
        <div>
          <h1 className='text-3xl font-bold uppercase mb-5'>Todos</h1>
          <div className='md:text-xl text-base md:mx-auto'>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => setCompleted(!completed)}
              className='text-7xl'
            />
            <label className='px-3'>Show completed</label>
          </div>
          <ul className='grid gap-3 md:grid-cols-3 my-3 '>
            {filteredTodos.map((todo) => (
              <div className='grid'>
                <li key={todo.id} className={` ${todo.completed ? 'bg-green-100' : 'bg-red-100'} p-2 rounded `}>
                  <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                  className='mr-2'
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                className='mx-2'>
                  {todo.title}
                </span>
                
                </li>
              </div>
            ))}
          </ul>
        </div> 
      </div>
    </div>
  );
};

export default Todos;