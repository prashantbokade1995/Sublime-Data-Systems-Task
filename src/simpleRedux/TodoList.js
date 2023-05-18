import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleUpdate = todo => {
    const updatedTodo = {
      ...todo,
      text: prompt('Update the todo', todo.text),
    };
    dispatch({ type: 'UPDATE_TODO', payload: updatedTodo });
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleUpdate(todo)}>Update</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
