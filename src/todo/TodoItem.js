import React, { useState } from 'react';

const TodoItem = ({ todo, editTodo, updateTodo, deleteTodo }) => {
    
  const [updatedTodo, setUpdatedTodo] = useState(todo.title);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdate = () => {
    updateTodo(todo._id, updatedTodo);
    setEditing(false);
  };



  return (
    <li>
      {editing ? (
        <input
          type="text"
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
        />
      ) : (
        todo.title
      )}
      {editing ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <>
        <button onClick={handleEdit}>Edit here</button>
          <button onClick={() => editTodo(todo._id, todo.title)}>Edit prompt</button>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;

