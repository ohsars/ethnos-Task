import React, { useState, useEffect } from 'react';
import { getTodos } from '../utils/api';

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
    <div className='mt-8 mx-[9%] md:mx-auto md:w-[90%]' >
      <h1 className='text-3xl font-bold uppercase mb-5 mx-auto'>Todos</h1>
      <div className='md:text-xl text-base md:mx-auto'>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
          className='text-7xl'
        />
        <label className=''>Show completed</label>
      </div>
      <ul className='grid gap-3 md:grid-cols-3 my-3 '>
        {filteredTodos.map((todo) => (
          <div className='grid  md:mx-auto '>
            <li key={todo.id} className={` ${todo.completed ? 'bg-green-200' : 'bg-red-200'} p-2 rounded `}>
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
  );
};

export default Todos;