import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text,
    };

    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
